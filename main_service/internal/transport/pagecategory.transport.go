package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"
)

type PagecategoryTransport struct {
	pb.UnimplementedPagecategoryServiceServer
	services.PagecategoryService
}

func (pt *PagecategoryTransport) GetPageByCategory(c context.Context, in *pb.Pagecategory) (*pb.ManyPageResponse, error) {
	res, err := pt.PagecategoryService.GetPageByCategory(in.CategoryId, in.Limit, in.Offset)
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
		page.TypeId = p.TypeID
		page.TemplateId = p.TemplateID

		pages = append(pages, &page)
	}
	return &pb.ManyPageResponse{
		Code:  2000,
		Pages: pages,
	}, nil
}

func (pt *PagecategoryTransport) GetCategoryByPage(c context.Context, in *pb.NumbRequest) (*pb.ManyCategoryResponse, error) {
	res, err := pt.PagecategoryService.GetCategoryByPage(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyCategoryResponse{
			Code: 2001,
		}, err
	}
	var categories []*pb.Category
	for _, c := range res {
		var category pb.Category
		category.CategoryId = c.CategoryID
		category.CategoryName = c.CategoryName
		category.CategorySlug = c.CategorySlug
		category.TypeId = c.TypeID
		category.CategoryParent = c.CategoryParent
		category.CategoryDescription = c.CategoryDescription

		categories = append(categories, &category)
	}
	return &pb.ManyCategoryResponse{
		Code:       2000,
		Categories: categories,
	}, nil
}

func (pt *PagecategoryTransport) CreateNewPagecategory(c context.Context, in *pb.Pagecategory) (*pb.MessageResponse, error) {
	err := pt.PagecategoryService.CreateNewPagecategory(in.PageId, in.CategoryId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2002,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "New pagecategory created",
	}, nil
}

func (pt *PagecategoryTransport) DeletePagecategory(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := pt.PagecategoryService.DeletePagecategory(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    2004,
			Message: "error deleting pagecategory",
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Pagecategory deleted",
	}, nil
}
