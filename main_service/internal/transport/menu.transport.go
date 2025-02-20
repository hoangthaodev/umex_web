package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type MenuTransport struct {
	pb.UnimplementedMenuServiceServer
	services.MenuService
}

func (mt *MenuTransport) GetAllMenu(context.Context, *emptypb.Empty) (*pb.ManyMenuResponse, error) {
	allMenu, err := mt.MenuService.GetAllMenu()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyMenuResponse{
			Code: 2001,
		}, nil
	}

	var menus []*pb.Menu
	for _, item := range allMenu {
		var menu pb.Menu
		menu.MenuId = item.MenuID
		menu.MenuName = item.MenuName
		menu.MenuValue = item.MenuValue

		menus = append(menus, &menu)
	}
	return &pb.ManyMenuResponse{
		Code:  2000,
		Menus: menus,
	}, nil
}

func (mt *MenuTransport) GetMenuById(c context.Context, in *pb.NumbRequest) (*pb.MenuResponse, error) {
	menu, err := mt.MenuService.GetMenuById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MenuResponse{
			Code: 2001,
		}, nil
	}
	return &pb.MenuResponse{
		Code: 2000,
		Menu: &pb.Menu{
			MenuId:    menu.MenuID,
			MenuName:  menu.MenuName,
			MenuValue: menu.MenuValue,
		},
	}, nil
}

func (mt *MenuTransport) CreateNewMenu(c context.Context, in *pb.Menu) (*pb.MessageResponse, error) {
	err := mt.MenuService.CreateNewMenu(in.MenuName, in.MenuValue)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2002,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "New menu created",
	}, nil
}

func (mt *MenuTransport) UpdateMenu(c context.Context, in *pb.Menu) (*pb.MessageResponse, error) {
	err := mt.MenuService.UpdateMenu(in.MenuName, in.MenuValue, in.MenuId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2003,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Menu updated",
	}, nil
}

func (mt *MenuTransport) DeleteMenu(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := mt.MenuService.DeleteMenu(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2004,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Menu deleted",
	}, nil
}
