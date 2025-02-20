package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type MenuLocationTransport struct {
	pb.UnimplementedMenuLocationServiceServer
	services.MenuLocationService
}

func (mlt *MenuLocationTransport) GetAllLocation(context.Context, *emptypb.Empty) (*pb.ManyMenuLocationResponse, error) {
	res, err := mlt.MenuLocationService.GetAllLocation()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyMenuLocationResponse{
			Code: 2001,
		}, nil
	}
	var menuLocations []*pb.MenuLocation
	for _, ml := range res {
		var menuLocation pb.MenuLocation
		menuLocation.LocationId = ml.LocationID
		menuLocation.LocationName = ml.LocationName
		menuLocation.MenuId = ml.MenuID

		menuLocations = append(menuLocations, &menuLocation)
	}
	return &pb.ManyMenuLocationResponse{
		Code:      2000,
		Locations: menuLocations,
	}, nil
}
func (mlt *MenuLocationTransport) GetLocationById(c context.Context, in *pb.NumbRequest) (*pb.MenuLocationResponse, error) {
	res, err := mlt.MenuLocationService.GetLocationById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MenuLocationResponse{
			Code: 2001,
		}, nil
	}

	var menuLocation pb.MenuLocation
	menuLocation.LocationId = res.LocationID
	menuLocation.LocationName = res.LocationName
	menuLocation.MenuId = res.MenuID

	return &pb.MenuLocationResponse{
		Code:     2000,
		Location: &menuLocation,
	}, nil
}

func (mlt *MenuLocationTransport) GetLocationByMenuId(c context.Context, in *pb.NumbRequest) (*pb.ManyMenuLocationResponse, error) {
	res, err := mlt.MenuLocationService.GetLocationByMenuId(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyMenuLocationResponse{
			Code: 2001,
		}, nil
	}
	var menuLocations []*pb.MenuLocation
	for _, ml := range res {
		var menuLocation pb.MenuLocation
		menuLocation.LocationId = ml.LocationID
		menuLocation.LocationName = ml.LocationName
		menuLocation.MenuId = ml.MenuID

		menuLocations = append(menuLocations, &menuLocation)
	}
	return &pb.ManyMenuLocationResponse{
		Code:      2000,
		Locations: menuLocations,
	}, nil
}

func (mlt *MenuLocationTransport) UpdateMenuLocation(c context.Context, in *pb.MenuLocation) (*pb.MessageResponse, error) {
	err := mlt.MenuLocationService.UpdateMenuLocation(in.MenuId, in.LocationId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2003,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Menu location updated",
	}, nil
}
