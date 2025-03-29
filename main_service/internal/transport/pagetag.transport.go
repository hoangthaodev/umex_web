package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/pkg/response"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type PagetagTransport struct {
	pb.UnimplementedPagetagServiceServer
	services.PagetagService
}

func (pt *PagetagTransport) GetAllPagetag(context.Context, *emptypb.Empty) (*pb.ManyPagetagResponse, error) {
	res, err := pt.PagetagService.GetAllPagetag()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPagetagResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	var pageTags []*pb.Pagetag
	for _, p := range res {
		var pageTag pb.Pagetag
		pageTag.PagetagId = p.PagetagID
		pageTag.PageId = p.PageID
		pageTag.TagId = p.TagID
		pageTag.PagetagSlug = p.PagetagSlug

		pageTags = append(pageTags, &pageTag)
	}
	return &pb.ManyPagetagResponse{
		Code:     int32(response.ErrCodeSuccess),
		Pagetags: pageTags,
	}, nil
}

func (pt *PagetagTransport) GetPagetagByTag(c context.Context, in *pb.NumbRequest) (*pb.ManyPagetagResponse, error) {
	res, err := pt.PagetagService.GetPagetagByTag(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPagetagResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	var pageTags []*pb.Pagetag
	for _, p := range res {
		var pageTag pb.Pagetag
		pageTag.PagetagId = p.PagetagID
		pageTag.PageId = p.PageID
		pageTag.TagId = p.TagID
		pageTag.PagetagSlug = p.PagetagSlug

		pageTags = append(pageTags, &pageTag)
	}
	return &pb.ManyPagetagResponse{
		Code:     int32(response.ErrCodeSuccess),
		Pagetags: pageTags,
	}, nil
}

func (pt *PagetagTransport) GetPagetagByPage(c context.Context, in *pb.NumbRequest) (*pb.ManyPagetagResponse, error) {
	res, err := pt.PagetagService.GetPagetagByPage(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPagetagResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	var pageTags []*pb.Pagetag
	for _, p := range res {
		var pageTag pb.Pagetag
		pageTag.PagetagId = p.PagetagID
		pageTag.PageId = p.PageID
		pageTag.TagId = p.TagID
		pageTag.PagetagSlug = p.PagetagSlug

		pageTags = append(pageTags, &pageTag)
	}
	return &pb.ManyPagetagResponse{
		Code:     int32(response.ErrCodeSuccess),
		Pagetags: pageTags,
	}, nil
}

func (pt *PagetagTransport) CreateNewPagetag(c context.Context, in *pb.Pagetag) (*pb.PagetagResponse, error) {
	res, err := pt.PagetagService.CreateNewPagetag(in.PageId, in.TagId, in.PagetagSlug)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.PagetagResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}
	var pagetag pb.Pagetag
	pagetag.PagetagId = res.PagetagID
	pagetag.PageId = res.PageID
	pagetag.TagId = res.TagID
	pagetag.PagetagSlug = res.PagetagSlug

	return &pb.PagetagResponse{
		Code:    int32(response.ErrCodeSuccess),
		Pagetag: &pagetag,
	}, nil
}

func (pt *PagetagTransport) DeletePagetag(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := pt.PagetagService.DeletePagetag(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2004,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Pagetag deleted",
	}, nil
}
