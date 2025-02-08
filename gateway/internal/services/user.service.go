package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type UserService struct{}

func (us *UserService) Login(userName string, password string) (*pb.LoginResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.Login(context.Background(), &pb.LoginRequest{
		Username: userName,
		Password: password,
	})
}

func (us *UserService) Logout(userId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.Logout(context.Background(), &pb.NumbRequest{
		Numb: userId,
	})
}

func (us *UserService) GetAllUser() (*pb.ManyUserResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.GetAllUser(context.Background(), &emptypb.Empty{})
}

func (us *UserService) GetUserById(userId int64) (*pb.UserResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.GetUserById(context.Background(), &pb.NumbRequest{
		Numb: userId,
	})
}

func (us *UserService) CreateNewUser(userName string, password string, email string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.CreateNewUser(context.Background(), &pb.User{
		UserName:     userName,
		UserPassword: password,
		UserEmail:    email,
	})
}

func (us *UserService) UpdateUser(userId int64, userName string, password string, email string, active int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.UpdateUser(context.Background(), &pb.User{
		UserId:       userId,
		UserName:     userName,
		UserPassword: password,
		UserEmail:    email,
		UserActive:   active,
	})
}

func (us *UserService) DeleteUser(userId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewUserServiceClient(conn)

	return client.DeleteUser(context.Background(), &pb.NumbRequest{
		Numb: userId,
	})
}
