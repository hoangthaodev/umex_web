package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/auth"
	"main_service/internal/services"
	"main_service/internal/utils"
	"main_service/pkg/response"
	"main_service/proto/pb"

	"golang.org/x/crypto/bcrypt"
	"google.golang.org/protobuf/types/known/emptypb"
)

type UserTransport struct {
	pb.UnimplementedUserServiceServer
	services.UserService
	services.AuthService
	services.TokenService
}

func (ut *UserTransport) Login(c context.Context, in *pb.LoginRequest) (*pb.LoginResponse, error) {
	user, err := ut.UserService.GetUserByUsername(in.Username)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.UserPassword), []byte(in.Password))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUserInputFail),
		}, nil
	}

	if user.UserActive == 0 {
		global.Logger.Error("user inactive")
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeUserPermisionFail),
		}, nil
	}

	var payload utils.JWTPayloadStruct
	payload.UserId = user.UserID
	payload.UserName = user.UserName
	payload.UserEmail = user.UserEmail
	tokenPair, err := auth.CreateTokenPair(payload)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.LoginResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}
	token, err := ut.TokenService.GetTokenByUserId(user.UserID)
	if err != nil {
		_, err = ut.TokenService.CreateNewToken(user.UserID, tokenPair.AccessToken, tokenPair.AccessExpired, tokenPair.RefreshToken, tokenPair.RefreshExpired)
		if err != nil {
			global.Logger.Error(err.Error())
			return &pb.LoginResponse{
				Code: int32(response.ErrCodeCreateFail),
			}, nil
		}
	} else {
		err = ut.TokenService.UpdateToken(tokenPair.AccessToken, tokenPair.AccessExpired, tokenPair.RefreshToken, tokenPair.RefreshExpired, token.TokenID)
		if err != nil {
			global.Logger.Error(err.Error())
			return &pb.LoginResponse{
				Code: int32(response.ErrCodeUpdateFail),
			}, nil
		}
	}
	return &pb.LoginResponse{
		Code: int32(response.ErrCodeSuccess),
		User: &pb.User{
			UserId:          user.UserID,
			UserName:        user.UserName,
			UserEmail:       user.UserEmail,
			UserDisplayName: user.UserDisplayName,
		},
		AccessToken:  tokenPair.AccessToken,
		RefreshToken: tokenPair.RefreshToken,
	}, nil
}

func (ut *UserTransport) Logout(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := ut.TokenService.DeleteToken(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    int32(response.ErrCodeDeleteFail),
			Message: "error deleting token",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    int32(response.ErrCodeSuccess),
		Message: "logout success",
	}, nil
}

func (ut *UserTransport) GetAllUser(context.Context, *emptypb.Empty) (*pb.ManyUserResponse, error) {
	tbUser, err := ut.UserService.GetAllUser()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyUserResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}

	var users []*pb.User

	for _, user := range tbUser {
		var inuser pb.User
		inuser.UserId = user.UserID
		inuser.UserName = user.UserName
		inuser.UserEmail = user.UserEmail
		inuser.UserActive = int32(user.UserActive)
		inuser.UserDisplayName = user.UserDisplayName

		users = append(users, &inuser)
	}

	return &pb.ManyUserResponse{
		Code:  int32(response.ErrCodeSuccess),
		Users: users,
	}, nil
}

func (ut *UserTransport) GetUserById(c context.Context, in *pb.NumbRequest) (*pb.UserResponse, error) {
	tbuser, err := ut.UserService.GetUserById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.UserResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}

	var user pb.User
	user.UserId = tbuser.UserID
	user.UserName = tbuser.UserName
	user.UserEmail = tbuser.UserEmail
	user.UserActive = int32(tbuser.UserActive)
	user.UserDisplayName = tbuser.UserDisplayName

	return &pb.UserResponse{
		Code: int32(response.ErrCodeSuccess),
		User: &user,
	}, nil
}

func (ut *UserTransport) CreateNewUser(c context.Context, in *pb.User) (*pb.UserResponse, error) {

	res, err := ut.UserService.CreateNewUser(in.UserName, in.UserPassword, in.UserEmail, in.UserActive, in.UserDisplayName)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.UserResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}

	_, err = ut.AuthService.CreateNewAuth(res.UserID, int32(111))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.UserResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}
	var user pb.User
	user.UserId = res.UserID
	user.UserName = res.UserName
	user.UserEmail = res.UserEmail
	user.UserActive = res.UserActive
	user.UserDisplayName = res.UserDisplayName

	return &pb.UserResponse{
		Code: int32(response.ErrCodeSuccess),
		User: &user,
	}, nil
}

func (ut *UserTransport) UpdateUser(c context.Context, in *pb.User) (*pb.MessageResponse, error) {
	err := ut.UserService.UpdateUser(in.UserName, in.UserPassword, in.UserEmail, in.UserActive, in.UserDisplayName, in.UserId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    int32(response.ErrCodeUpdateFail),
			Message: "error updating user",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    int32(response.ErrCodeSuccess),
		Message: "update user success",
	}, nil
}

func (ut *UserTransport) DeleteUser(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := ut.UserService.DeleteUser(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    int32(response.ErrCodeDeleteFail),
			Message: "error deleting user",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    int32(response.ErrCodeSuccess),
		Message: "delete user success",
	}, nil
}
