package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"
)

type PagetagTransport struct {
	pb.UnimplementedPagetagServiceServer
	services.PagetagService
}

func (pt *PagetagTransport) GetPageByTag(c context.Context, in *pb.Pagetag) (*pb.ManyPageResponse, error) {
	res, err := pt.PagetagService.GetPageByTag(in.TagId, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, err
	}
	var pages []*pb.Page
	for _, p := range res {
		var page pb.Page
		page.PageId = p.PageID
		page.PageTitle = p.PageTitle
		page.PageSlug = p.PageSlug
		page.PageContent = p.PageContent
		page.PageDescription = p.PageDescription
		page.PageStatus = p.PageStatus
		page.UserId = p.UserID
		page.PagePublishYear = p.PagePublishYear
		page.PagePublishMonth = p.PagePublishMonth
		page.PagePublishDay = p.PagePublishDay
		page.PageFeatureImage = p.PageFeatureImage
		page.PageTrash = p.PageTrash
		page.UserId = p.UserID
		page.TypeId = p.TypeID
		page.TemplateId = p.TemplateID

		pages = append(pages, &page)
	}
	return &pb.ManyPageResponse{
		Code:  2000,
		Pages: pages,
	}, nil
}

func (pt *PagetagTransport) GetTagByPage(c context.Context, in *pb.NumbRequest) (*pb.ManyTagResponse, error) {
	res, err := pt.PagetagService.GetTagByPage(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyTagResponse{
			Code: 2001,
		}, err
	}
	var tags []*pb.Tag
	for _, t := range res {
		var tag pb.Tag
		tag.TagId = t.TagID
		tag.TagName = t.TagName
		tag.TagSlug = t.TagSlug
		tag.TagDescription = t.TagDescription
		tag.TypeId = t.TypeID

		tags = append(tags, &tag)
	}
	return &pb.ManyTagResponse{
		Code: 2000,
		Tags: tags,
	}, nil
}

func (pt *PagetagTransport) CreateNewPagetag(c context.Context, in *pb.Pagetag) (*pb.MessageResponse, error) {
	err := pt.PagetagService.CreateNewPagetag(in.PageId, in.TagId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2002,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "New pagetag created",
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
