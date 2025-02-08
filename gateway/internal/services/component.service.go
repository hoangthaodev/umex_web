package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ComponentService struct{}

func (cps *ComponentService) GetAllComponent() (*pb.ManyComponentResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.GetAllComponent(context.Background(), &emptypb.Empty{})
}

func (cps *ComponentService) GetComponentById(compId int64) (*pb.ComponentResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.GetComponentById(context.Background(), &pb.NumbRequest{
		Numb: compId,
	})
}

func (cps *ComponentService) GetComponentByName(name string) (*pb.ComponentResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.GetComponentByName(context.Background(), &pb.StrRequest{
		Str: name,
	})
}

func (cps *ComponentService) GetComponentByPosition(position int64) (*pb.ManyComponentResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.GetComponentByPosition(context.Background(), &pb.NumbRequest{
		Numb: position,
	})
}

func (cps *ComponentService) CreateNewComponent(name string, position int32, index int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.CreateNewComponent(context.Background(), &pb.Component{
		CompName:     name,
		CompPosition: position,
		CompIndex:    index,
	})
}

func (cps *ComponentService) UpdateComponent(compId int64, name string, position int32, index int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.UpdateComponent(context.Background(), &pb.Component{
		CompId:       compId,
		CompName:     name,
		CompPosition: position,
		CompIndex:    index,
	})
}

func (cps *ComponentService) DeleteComponent(compId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()
	client := pb.NewComponentServiceClient(conn)

	return client.DeleteComponent(context.Background(), &pb.NumbRequest{
		Numb: compId,
	})
}
