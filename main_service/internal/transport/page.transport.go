package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"
)

type PageTransport struct {
	pb.UnimplementedPageServiceServer
	services.PageService
}

func (pt *PageTransport) GetAllPage(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetAllPage(in.Limit, in.Offset)
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

func (pt *PageTransport) GetPageById(c context.Context, in *pb.NumbRequest) (*pb.PageResponse, error) {
	res, err := pt.PageService.GetPageById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.PageResponse{
			Code: 2001,
		}, nil
	}
	var page pb.Page
	page.PageId = res.PageID
	page.PageTitle = res.PageTitle
	page.PageSlug = res.PageSlug
	page.PageContent = res.PageContent
	page.PageDescription = res.PageDescription
	page.PageStatus = res.PageStatus
	page.PagePublishYear = res.PagePublishYear
	page.PagePublishMonth = res.PagePublishMonth
	page.PagePublishDay = res.PagePublishDay
	page.PageFeatureImage = res.PageFeatureImage
	page.PageTrash = res.PageTrash
	page.UserId = res.UserID
	page.TypeId = res.TypeID
	page.TemplateId = res.TemplateID

	return &pb.PageResponse{
		Code: 2000,
		Page: &page,
	}, nil
}

func (pt *PageTransport) GetPageBySlug(c context.Context, in *pb.StrRequest) (*pb.PageResponse, error) {
	res, err := pt.PageService.GetPageBySlug(in.Str)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.PageResponse{
			Code: 2001,
		}, nil
	}
	var page pb.Page
	page.PageId = res.PageID
	page.PageTitle = res.PageTitle
	page.PageSlug = res.PageSlug
	page.PageContent = res.PageContent
	page.PageDescription = res.PageDescription
	page.PageStatus = res.PageStatus
	page.PagePublishYear = res.PagePublishYear
	page.PagePublishMonth = res.PagePublishMonth
	page.PagePublishDay = res.PagePublishDay
	page.PageFeatureImage = res.PageFeatureImage
	page.PageTrash = res.PageTrash
	page.UserId = res.UserID
	page.TypeId = res.TypeID
	page.TemplateId = res.TemplateID

	return &pb.PageResponse{
		Code: 2000,
		Page: &page,
	}, nil
}

func (pt *PageTransport) GetPageByStatus(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByStatus(in.PageStatus, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByTrash(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByTrash(in.PageTrash, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByUser(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByUser(in.UserId, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByType(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByType(in.TypeId, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByTypeNStatus(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByTypeNStatus(in.TypeId, in.PageStatus, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByPublishYear(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByPublishYear(in.PagePublishYear, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByPublishYearMonth(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByPublishYearMonth(in.PagePublishYear, in.PagePublishMonth, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) GetPageByPublishYearMonthDay(c context.Context, in *pb.Page) (*pb.ManyPageResponse, error) {
	res, err := pt.PageService.GetPageByPublishYearMonthDay(in.PagePublishYear, in.PagePublishMonth, in.PagePublishDay, in.Limit, in.Offset)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPageResponse{
			Code: 2001,
		}, nil
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

func (pt *PageTransport) CreateNewPage(c context.Context, in *pb.Page) (*pb.MessageResponse, error) {
	err := pt.PageService.CreateNewPage(in.PageTitle, in.PageSlug, in.PageContent, in.PageDescription, in.PageStatus, in.PagePublishYear, in.PagePublishMonth, in.PagePublishDay, in.PageFeatureImage, in.PageTrash, in.UserId, in.TypeId, in.TemplateId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2002,
			Message: err.Error(),
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Page created successfully",
	}, nil
}

func (pt *PageTransport) UpdatePage(c context.Context, in *pb.Page) (*pb.MessageResponse, error) {
	err := pt.PageService.UpdatePage(in.PageTitle, in.PageSlug, in.PageContent, in.PageDescription, in.PageStatus, in.PagePublishYear, in.PagePublishMonth, in.PagePublishDay, in.PageFeatureImage, in.PageTrash, in.UserId, in.TypeId, in.TemplateId, in.PageId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2003,
			Message: err.Error(),
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Page updated successfully",
	}, nil
}

func (pt *PageTransport) DeletePage(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := pt.PageService.DeletePage(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2004,
			Message: err.Error(),
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Page deleted successfully",
	}, nil
}
