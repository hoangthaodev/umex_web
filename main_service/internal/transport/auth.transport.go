package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/auth"
	"main_service/internal/services"
	"main_service/pkg/response"
	"main_service/proto/pb"

	"time"
)

type AuthTransport struct {
	pb.UnimplementedAuthServiceServer
	services.AuthService
	services.TokenService
}

func (at *AuthTransport) RefreshToken(c context.Context, in *pb.MessageRequest) (*pb.LoginResponse, error) {
	refreshToken := in.Str

	// verify decode refresh token
	decode, err := auth.VerifyToken(refreshToken, []byte(global.Config.Server.PrivateKey))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	// check token co hay khong
	payload := decode["payload"].(map[string]interface{})
	userId := int64(payload["user_id"].(float64))
	token, err := at.GetTokenByUserId(userId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	// check het han refresh token
	if token.RefreshTokenExpired < time.Now().Unix() {
		global.Logger.Error("refresh token expired")
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	// generate new access token and refresh token
	tokenPair, err := auth.CreateTokenPair(payload)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}

	// update token
	err = at.UpdateToken(tokenPair.AccessToken, tokenPair.AccessExpired, tokenPair.RefreshToken, tokenPair.RefreshExpired, token.TokenID)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUpdateFail),
		}, nil
	}

	return &pb.LoginResponse{
		Code: int32(response.ErrCodeSuccess),
		User: &pb.User{
			UserId:          userId,
			UserName:        payload["user_name"].(string),
			UserEmail:       payload["user_email"].(string),
			UserDisplayName: payload["user_display_name"].(string),
		},
		AccessToken:  tokenPair.AccessToken,
		RefreshToken: tokenPair.RefreshToken,
	}, nil
}

func (at *AuthTransport) CheckAuth(c context.Context, in *pb.MessageRequest) (*pb.AuthResponse, error) {
	authorization := in.Str

	// verify decode authorization
	decode, err := auth.VerifyToken(authorization, []byte(global.Config.Server.PublishKey))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.AuthResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	// check token co hay khong
	user := decode["payload"].(map[string]interface{})
	userId := int64(user["user_id"].(float64))
	token, err := at.GetTokenByUserId(userId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.AuthResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	// neu co xem co phai la token gui hay khong
	if token.AccessToken != authorization {
		global.Logger.Error("token not match")
		return &pb.AuthResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	// check het han access token roi thi check het han refresh token chua
	if token.AccessTokenExpired < time.Now().Unix() {
		if token.RefreshTokenExpired < time.Now().Unix() {
			global.Logger.Error("token expired")
			return &pb.AuthResponse{
				Code: int32(response.ErrCodeUserInputFail),
			}, nil
		} else {
			return &pb.AuthResponse{
				Code: int32(response.ErrCodeRefreshTokenRequire),
			}, nil
		}
	}

	// get permission
	auth, err := at.AuthService.GetAuthByUser(userId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.AuthResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	return &pb.AuthResponse{
		Code: int32(response.ErrCodeSuccess),
		Auth: &pb.Auth{
			AuthId: auth.AuthID,
			UserId: auth.UserID,
			RoleId: auth.RoleID,
		},
	}, nil
}

func (at *AuthTransport) GetAuthByUserId(c context.Context, in *pb.NumbRequest) (*pb.AuthResponse, error) {
	userId := in.Numb

	// user nay co dang login hay khong: neu khong thi response, co thi lay thong tin auth -> response
	_, err := at.TokenService.GetTokenByUserId(userId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.AuthResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	auth, err := at.AuthService.GetAuthByUser(userId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.AuthResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	var authResponse pb.Auth
	authResponse.UserId = auth.UserID
	authResponse.RoleId = auth.RoleID

	return &pb.AuthResponse{
		Code: int32(response.ErrCodeSuccess),
		Auth: &authResponse,
	}, nil
}
