package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type MenuService struct{}

func (ms *MenuService) GetAllMenu() (*pb.ManyMenuResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuServiceClient(conn)
	return client.GetAllMenu(context.Background(), &emptypb.Empty{})
}

func (ms *MenuService) GetMenuById(menuId int64) (*pb.MenuResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuServiceClient(conn)
	return client.GetMenuById(context.Background(), &pb.NumbRequest{
		Numb: menuId,
	})
}

func (ms *MenuService) CreateNewMenu(menuName string, menuValue string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuServiceClient(conn)
	return client.CreateNewMenu(context.Background(), &pb.Menu{
		MenuName:  menuName,
		MenuValue: menuValue,
	})
}

func (ms *MenuService) UpdateMenu(menuId int64, menuName string, menuValue string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuServiceClient(conn)
	return client.UpdateMenu(context.Background(), &pb.Menu{
		MenuId:    menuId,
		MenuName:  menuName,
		MenuValue: menuValue,
	})
}

func (ms *MenuService) DeleteMenu(menuId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewMenuServiceClient(conn)
	return client.DeleteMenu(context.Background(), &pb.NumbRequest{
		Numb: menuId,
	})
}
