package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type TagTransport struct {
	pb.UnimplementedTagServiceServer
	services.TagService
}

func (tt *TagTransport) GetAllTag(context.Context, *emptypb.Empty) (*pb.ManyTagResponse, error) {
	res, err := tt.TagService.GetAllTag()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyTagResponse{
			Code: 2001,
		}, nil
	}
	var tags []*pb.Tag
	for _, t := range res {
		var tag pb.Tag
		tag.TagId = t.TagID
		tag.TagName = t.TagName
		tag.TagSlug = t.TagSlug
		tag.TypeId = t.TypeID
		tag.TagDescription = t.TagDescription

		tags = append(tags, &tag)
	}
	return &pb.ManyTagResponse{
		Code: 2000,
		Tags: tags,
	}, nil
}

func (tt *TagTransport) GetTagById(c context.Context, in *pb.NumbRequest) (*pb.TagResponse, error) {
	res, err := tt.TagService.GetTagById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.TagResponse{
			Code: 2001,
		}, nil
	}
	var tag pb.Tag
	tag.TagId = res.TagID
	tag.TagName = res.TagName
	tag.TagSlug = res.TagSlug
	tag.TypeId = res.TypeID
	tag.TagDescription = res.TagDescription

	return &pb.TagResponse{
		Code: 2000,
		Tag:  &tag,
	}, nil
}

func (tt *TagTransport) GetTagByType(c context.Context, in *pb.NumbRequest) (*pb.ManyTagResponse, error) {
	res, err := tt.TagService.GetTagByType(int32(in.Numb))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyTagResponse{
			Code: 2001,
		}, nil
	}
	var tags []*pb.Tag
	for _, t := range res {
		var tag pb.Tag
		tag.TagId = t.TagID
		tag.TagName = t.TagName
		tag.TagSlug = t.TagSlug
		tag.TypeId = t.TypeID
		tag.TagDescription = t.TagDescription

		tags = append(tags, &tag)
	}
	return &pb.ManyTagResponse{
		Code: 2000,
		Tags: tags,
	}, nil
}

func (tt *TagTransport) GetTagBySlug(c context.Context, in *pb.StrRequest) (*pb.TagResponse, error) {
	res, err := tt.TagService.GetTagBySlug(in.Str)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.TagResponse{
			Code: 2001,
		}, nil
	}
	var tag pb.Tag
	tag.TagId = res.TagID
	tag.TagName = res.TagName
	tag.TagSlug = res.TagSlug
	tag.TypeId = res.TypeID
	tag.TagDescription = res.TagDescription

	return &pb.TagResponse{
		Code: 2000,
		Tag:  &tag,
	}, nil
}

func (tt *TagTransport) CreateNewTag(c context.Context, in *pb.Tag) (*pb.MessageResponse, error) {
	err := tt.TagService.CreateNewTag(in.TagName, in.TagSlug, in.TagDescription, in.TypeId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2002,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Tag created",
	}, nil
}

func (tt *TagTransport) UpdateTag(c context.Context, in *pb.Tag) (*pb.MessageResponse, error) {
	err := tt.TagService.UpdateTag(in.TagName, in.TagSlug, in.TagDescription, in.TypeId, in.TagId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2003,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Tag updated",
	}, nil
}

func (tt *TagTransport) DeleteTag(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := tt.TagService.DeleteTag(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2004,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Tag deleted",
	}, nil
}
