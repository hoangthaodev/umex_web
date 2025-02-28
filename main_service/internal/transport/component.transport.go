package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ComponentTransport struct {
	pb.UnimplementedComponentServiceServer
	services.ComponentService
}

func (cpt *ComponentTransport) GetAllComponent(context.Context, *emptypb.Empty) (*pb.ManyComponentResponse, error) {
	tbComp, err := cpt.ComponentService.GetAllComponent()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyComponentResponse{
			Code: 2001,
		}, nil
	}

	var components []*pb.Component
	for _, comp := range tbComp {
		var component pb.Component
		component.ComponentId = comp.ComponentID
		component.ComponentName = comp.ComponentName
		component.ComponentPosition = comp.ComponentPosition
		component.ComponentIndex = comp.ComponentIndex
		component.ComponentMap = comp.ComponentMap

		components = append(components, &component)
	}

	return &pb.ManyComponentResponse{
		Code:       2000,
		Components: components,
	}, nil
}

func (cpt *ComponentTransport) GetComponentById(c context.Context, in *pb.NumbRequest) (*pb.ComponentResponse, error) {
	tbComp, err := cpt.ComponentService.GetComponentById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ComponentResponse{
			Code: 2001,
		}, nil
	}

	var component pb.Component
	component.ComponentId = tbComp.ComponentID
	component.ComponentName = tbComp.ComponentName
	component.ComponentPosition = tbComp.ComponentPosition
	component.ComponentIndex = tbComp.ComponentIndex
	component.ComponentMap = tbComp.ComponentMap

	return &pb.ComponentResponse{
		Code:      2000,
		Component: &component,
	}, nil
}

func (cpt *ComponentTransport) GetComponentByName(c context.Context, in *pb.MessageRequest) (*pb.ComponentResponse, error) {
	tbComp, err := cpt.ComponentService.GetComponentByName(in.Str)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ComponentResponse{
			Code: 2001,
		}, nil
	}

	var component pb.Component
	component.ComponentId = tbComp.ComponentID
	component.ComponentName = tbComp.ComponentName
	component.ComponentPosition = tbComp.ComponentPosition
	component.ComponentIndex = tbComp.ComponentIndex
	component.ComponentMap = tbComp.ComponentMap

	return &pb.ComponentResponse{
		Code:      2000,
		Component: &component,
	}, nil
}

func (cpt *ComponentTransport) GetComponentByPosition(c context.Context, in *pb.NumbRequest) (*pb.ManyComponentResponse, error) {
	tbComp, err := cpt.ComponentService.GetComponentByPosition(int32(in.Numb))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyComponentResponse{
			Code: 2001,
		}, nil
	}

	var components []*pb.Component
	for _, comp := range tbComp {
		var component pb.Component
		component.ComponentId = comp.ComponentID
		component.ComponentName = comp.ComponentName
		component.ComponentPosition = comp.ComponentPosition
		component.ComponentIndex = comp.ComponentIndex
		component.ComponentMap = comp.ComponentMap

		components = append(components, &component)
	}

	return &pb.ManyComponentResponse{
		Code:       2000,
		Components: components,
	}, nil
}

func (cpt *ComponentTransport) CreateNewComponent(c context.Context, in *pb.Component) (*pb.MessageResponse, error) {
	res, err := cpt.ComponentService.GetComponentByPosition(in.ComponentPosition)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2001,
			Message: "error getting component by position",
		}, nil
	}

	err = cpt.ComponentService.CreateNewComponent(in.ComponentName, in.ComponentPosition, int32(len(res)+1), in.ComponentMap)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2002,
			Message: "error creating new component",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "new component created",
	}, nil
}

func (cpt *ComponentTransport) UpdateComponent(c context.Context, in *pb.Component) (*pb.MessageResponse, error) {
	err := cpt.ComponentService.UpdateComponent(in.ComponentName, in.ComponentPosition, in.ComponentIndex, in.ComponentId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2003,
			Message: "error updating component",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "component updated",
	}, nil
}

func (cpt *ComponentTransport) DeleteComponent(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := cpt.ComponentService.DeleteComponent(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2004,
			Message: "error deleting component",
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "component deleted",
	}, nil
}
