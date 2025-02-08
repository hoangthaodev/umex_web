package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/auth"
	"main_service/internal/services"
	"main_service/internal/utils"
	"main_service/proto/pb"
	"time"
)

type AuthTransport struct {
	pb.UnimplementedAuthServiceServer
	services.AuthService
	services.TokenService
}

func (at *AuthTransport) CheckAuth(c context.Context, in *pb.StrRequest) (*pb.AuthResponse, error) {
	authorization := in.Str

	// verify decode authorization
	decode, err := auth.VerifyToken(authorization, []byte(global.Config.Server.PublishKey))
	if err != nil {
		return &pb.AuthResponse{
			Code: 3001,
		}, nil
	}
	// check het han chua
	expired_at := decode["expires_at"].(float64)
	if int64(expired_at) < utils.TimeToInt64(time.Now()) {
		return &pb.AuthResponse{
			Code: 3001,
		}, nil
	}
	// check token co hay khong
	user := decode["payload"].(map[string]interface{})
	userId := int64(user["user_id"].(float64))
	token, err := at.GetTokenByUserId(userId)
	if err != nil {
		return &pb.AuthResponse{
			Code: 3001,
		}, nil
	}
	if token.ExpiredToken < utils.TimeToInt64(time.Now()) {
		return &pb.AuthResponse{
			Code: 3001,
		}, nil
	}

	// get permission
	auth, err := at.AuthService.GetAuthByUserId(userId)
	if err != nil {
		return &pb.AuthResponse{
			Code: 3001,
		}, nil
	}

	return &pb.AuthResponse{
		Code: 2000,
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
		return &pb.AuthResponse{
			Code: 2001,
		}, nil
	}
	auth, err := at.AuthService.GetAuthByUserId(userId)
	if err != nil {
		return &pb.AuthResponse{
			Code: 2001,
		}, nil
	}
	var authResponse pb.Auth
	authResponse.UserId = auth.UserID
	authResponse.RoleId = auth.RoleID

	return &pb.AuthResponse{
		Code: 2000,
		Auth: &authResponse,
	}, nil
}
