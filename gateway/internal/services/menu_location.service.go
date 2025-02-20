package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type MenuLocationService struct{}

func (mls *MenuLocationService) GetAllLocation() (*pb.ManyMenuLocationResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuLocationServiceClient(conn)
	return client.GetAllLocation(context.Background(), &emptypb.Empty{})
}

func (mls *MenuLocationService) GetLocationById(locId int64) (*pb.MenuLocationResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuLocationServiceClient(conn)
	return client.GetLocationById(context.Background(), &pb.NumbRequest{
		Numb: locId,
	})
}

func (mls *MenuLocationService) GetLocationByMenuId(menuId int64) (*pb.ManyMenuLocationResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuLocationServiceClient(conn)
	return client.GetLocationByMenuId(context.Background(), &pb.NumbRequest{
		Numb: menuId,
	})
}

func (mls *MenuLocationService) UpdateMenuLocation(locId int64, menuId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuLocationServiceClient(conn)

	return client.UpdateMenuLocation(context.Background(), &pb.MenuLocation{
		LocationId: locId,
		MenuId:     menuId,
	})
}
