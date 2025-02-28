package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ConfigService struct{}

func (cs *ConfigService) GetAllConfig() (*pb.ManyConfigResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewConfigServiceClient(conn)

	return client.GetAllConfig(context.Background(), &emptypb.Empty{})
}

func (cs *ConfigService) GetConfigByKey(key string) (*pb.ConfigResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewConfigServiceClient(conn)

	return client.GetConfigByKey(context.Background(), &pb.MessageRequest{
		Str: key,
	})
}

func (cs *ConfigService) GetConfigById(confId int64) (*pb.ConfigResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewConfigServiceClient(conn)

	return client.GetConfigById(context.Background(), &pb.NumbRequest{
		Numb: confId,
	})
}

func (cs *ConfigService) CreateNewConfig(key string, value string, style string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewConfigServiceClient(conn)

	return client.CreateNewConfig(context.Background(), &pb.Config{
		ConfigKey:   key,
		ConfigValue: value,
		ConfigStyle: style,
	})
}

func (cs *ConfigService) UpdateConfig(confId int64, key string, value string, style string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewConfigServiceClient(conn)

	return client.UpdateConfig(context.Background(), &pb.Config{
		ConfigId:    confId,
		ConfigKey:   key,
		ConfigValue: value,
		ConfigStyle: style,
	})
}

func (cs *ConfigService) DeleteConfig(confId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewConfigServiceClient(conn)

	return client.DeleteConfig(context.Background(), &pb.NumbRequest{
		Numb: confId,
	})
}
