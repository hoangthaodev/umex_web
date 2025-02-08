package transport

import (
	"context"
	"main_service/internal/auth"
	"main_service/internal/services"
	"main_service/internal/utils"
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
		return &pb.LoginResponse{
			Code: 3001,
		}, nil
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.UserPassword), []byte(in.Password))
	if err != nil {
		return &pb.LoginResponse{
			Code: 3001,
		}, nil
	}

	if user.UserActive == 0 {
		return &pb.LoginResponse{
			Code: 3002,
		}, nil
	}

	var payload utils.JWTPayloadStruct
	payload.UserId = user.UserID
	payload.UserName = user.UserName
	payload.UserEmail = user.UserEmail
	tokenPair, err := auth.CreateTokenPair(payload)
	if err != nil {
		return &pb.LoginResponse{
			Code: 2002,
		}, nil
	}
	token, err := ut.TokenService.GetTokenByUserId(user.UserID)
	if err != nil {
		err = ut.TokenService.CreateNewToken(user.UserID, tokenPair.RefreshToken, tokenPair.RefreshExpires)
		if err != nil {
			return &pb.LoginResponse{
				Code: 2002,
			}, nil
		}
	} else {
		err = ut.TokenService.UpdateToken(tokenPair.RefreshToken, tokenPair.RefreshExpires, token.TokenID)
		if err != nil {
			return &pb.LoginResponse{
				Code: 2003,
			}, nil
		}
	}
	return &pb.LoginResponse{
		Code: 2000,
		User: &pb.User{
			UserId:    user.UserID,
			UserName:  user.UserName,
			UserEmail: user.UserEmail,
		},
		AccessToken:  tokenPair.AccessToken,
		RefreshToken: tokenPair.RefreshToken,
	}, nil
}

func (ut *UserTransport) Logout(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := ut.TokenService.DeleteToken(in.Numb)
	if err != nil {
		return &pb.MessageResponse{
			Code:    2004,
			Message: "error deleting token",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "logout success",
	}, nil
}

func (ut *UserTransport) GetAllUser(context.Context, *emptypb.Empty) (*pb.ManyUserResponse, error) {
	tbUser, err := ut.UserService.GetAllUser()
	if err != nil {
		return &pb.ManyUserResponse{
			Code: 2001,
		}, nil
	}

	var users []*pb.User

	for _, user := range tbUser {
		var inuser pb.User
		inuser.UserId = user.UserID
		inuser.UserName = user.UserName
		inuser.UserEmail = user.UserEmail
		inuser.UserActive = int32(user.UserActive)

		users = append(users, &inuser)
	}

	return &pb.ManyUserResponse{
		Code:  2000,
		Users: users,
	}, nil
}

func (ut *UserTransport) GetUserById(c context.Context, in *pb.NumbRequest) (*pb.UserResponse, error) {
	tbuser, err := ut.UserService.GetUserById(in.Numb)
	if err != nil {
		return &pb.UserResponse{
			Code: 2001,
		}, nil
	}

	var user pb.User
	user.UserId = tbuser.UserID
	user.UserName = tbuser.UserName
	user.UserEmail = tbuser.UserEmail
	user.UserActive = int32(tbuser.UserActive)

	return &pb.UserResponse{
		Code: 2000,
		User: &user,
	}, nil
}

func (ut *UserTransport) CreateNewUser(c context.Context, in *pb.User) (*pb.MessageResponse, error) {

	err := ut.UserService.CreateNewUser(in.UserName, in.UserPassword, in.UserEmail)
	if err != nil {
		return &pb.MessageResponse{
			Code:    2002,
			Message: "error creating user",
		}, nil
	}

	user, err := ut.UserService.GetUserByUsername(in.UserName)
	if err != nil {
		return &pb.MessageResponse{
			Code:    2001,
			Message: "error getting user",
		}, nil
	}

	err = ut.AuthService.CreateNewAuth(user.UserID, int32(111))
	if err != nil {
		return &pb.MessageResponse{
			Code:    2002,
			Message: "error creating auth",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "create user success",
	}, nil
}

func (ut *UserTransport) UpdateUser(c context.Context, in *pb.User) (*pb.MessageResponse, error) {
	err := ut.UserService.UpdateUser(in.UserName, in.UserPassword, in.UserEmail, int8(in.UserActive), in.UserId)
	if err != nil {
		return &pb.MessageResponse{
			Code:    2003,
			Message: "error updating user",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "update user success",
	}, nil
}

func (ut *UserTransport) DeleteUser(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := ut.UserService.DeleteUser(in.Numb)
	if err != nil {
		return &pb.MessageResponse{
			Code:    2004,
			Message: "error deleting user",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "delete user success",
	}, nil
}
