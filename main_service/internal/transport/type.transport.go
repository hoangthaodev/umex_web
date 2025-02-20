package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type TypeTransport struct {
	pb.UnimplementedTypeServiceServer
	services.TypeService
}

func (tt *TypeTransport) GetAllType(context.Context, *emptypb.Empty) (*pb.ManyTypeResponse, error) {
	res, err := tt.TypeService.GetAllType()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyTypeResponse{
			Code: 2001,
		}, nil
	}
	var types []*pb.Type
	for _, t := range res {
		var typ pb.Type
		typ.TypeId = t.TypeID
		typ.TypeName = t.TypeName

		types = append(types, &typ)
	}
	return &pb.ManyTypeResponse{
		Code:  2000,
		Types: types,
	}, nil
}

func (tt *TypeTransport) GetTypeById(c context.Context, in *pb.NumbRequest) (*pb.TypeResponse, error) {
	res, err := tt.TypeService.GetTypeById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.TypeResponse{
			Code: 2001,
		}, nil
	}
	var typ pb.Type
	typ.TypeId = res.TypeID
	typ.TypeName = res.TypeName

	return &pb.TypeResponse{
		Code: 2000,
		Type: &typ,
	}, nil
}

func (tt *TypeTransport) CreateNewType(c context.Context, in *pb.Type) (*pb.MessageResponse, error) {
	err := tt.TypeService.CreateNewType(in.TypeName)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2001,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Type created",
	}, nil
}

func (tt *TypeTransport) UpdateType(c context.Context, in *pb.Type) (*pb.MessageResponse, error) {
	err := tt.TypeService.UpdateType(in.TypeName, in.TypeId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2001,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Type updated",
	}, nil
}

func (tt *TypeTransport) DeleteType(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := tt.TypeService.DeleteType(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2001,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Type deleted",
	}, nil
}
