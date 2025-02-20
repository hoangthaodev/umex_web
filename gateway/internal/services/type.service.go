package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type TypeService struct{}

func (ts *TypeService) GetAllType() (*pb.ManyTypeResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTypeServiceClient(conn)
	return client.GetAllType(context.Background(), &emptypb.Empty{})
}

func (ts *TypeService) GetTypeById(typeId int64) (*pb.TypeResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTypeServiceClient(conn)
	return client.GetTypeById(context.Background(), &pb.NumbRequest{
		Numb: typeId,
	})
}

func (ts *TypeService) CreateNewType(typeName string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTypeServiceClient(conn)
	return client.CreateNewType(context.Background(), &pb.Type{
		TypeName: typeName,
	})
}

func (ts *TypeService) UpdateType(typeName string, typeId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTypeServiceClient(conn)
	return client.UpdateType(context.Background(), &pb.Type{
		TypeName: typeName,
		TypeId:   typeId,
	})
}

func (ts *TypeService) DeleteType(typeId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTypeServiceClient(conn)
	return client.DeleteType(context.Background(), &pb.NumbRequest{
		Numb: typeId,
	})
}
