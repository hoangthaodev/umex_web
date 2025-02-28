package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"
)

type AuthService struct{}

func (as *AuthService) CheckAuth(authorization string) (*pb.AuthResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewAuthServiceClient(conn)
	return client.CheckAuth(context.Background(), &pb.MessageRequest{
		Str: authorization,
	})
}
func (as *AuthService) GetAuthByUserId(userId int64) (*pb.AuthResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewAuthServiceClient(conn)

	return client.GetAuthByUserId(context.Background(), &pb.NumbRequest{
		Numb: userId,
	})
}
