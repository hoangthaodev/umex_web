package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/pkg/response"
	"main_service/proto/pb"
)

type PagecategoryTransport struct {
	pb.UnimplementedPagecategoryServiceServer
	services.PagecategoryService
}

func (pt *PagecategoryTransport) GetPagecategoryByCategory(c context.Context, in *pb.NumbRequest) (*pb.ManyPagecategoryResponse, error) {
	res, err := pt.PagecategoryService.GetPagecategoryByCategory(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPagecategoryResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	var pageCategories []*pb.Pagecategory
	for _, p := range res {
		var pageCategory pb.Pagecategory
		pageCategory.PagecategoryId = p.PagecategoryID
		pageCategory.PageId = p.PageID
		pageCategory.CategoryId = p.CategoryID

		pageCategories = append(pageCategories, &pageCategory)
	}
	return &pb.ManyPagecategoryResponse{
		Code:           int32(response.ErrCodeSuccess),
		Pagecategories: pageCategories,
	}, nil
}

func (pt *PagecategoryTransport) GetPagecategoryByPage(c context.Context, in *pb.NumbRequest) (*pb.ManyPagecategoryResponse, error) {
	res, err := pt.PagecategoryService.GetPagecategoryByPage(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyPagecategoryResponse{
			Code: int32(response.ErrCodeGetFail),
		}, nil
	}
	var pageCategories []*pb.Pagecategory
	for _, p := range res {
		var pageCategory pb.Pagecategory
		pageCategory.PagecategoryId = p.PagecategoryID
		pageCategory.PageId = p.PageID
		pageCategory.CategoryId = p.CategoryID

		pageCategories = append(pageCategories, &pageCategory)
	}
	return &pb.ManyPagecategoryResponse{
		Code:           int32(response.ErrCodeSuccess),
		Pagecategories: pageCategories,
	}, nil
}

func (pt *PagecategoryTransport) CreateNewPagecategory(c context.Context, in *pb.Pagecategory) (*pb.PagecategoryResponse, error) {
	res, err := pt.PagecategoryService.CreateNewPagecategory(in.PageId, in.CategoryId, in.PagecategorySlug)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.PagecategoryResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}
	var pagecategory pb.Pagecategory
	pagecategory.PagecategoryId = res.PagecategoryID
	pagecategory.PageId = res.PageID
	pagecategory.CategoryId = res.CategoryID
	pagecategory.PagecategorySlug = res.PagecategorySlug

	return &pb.PagecategoryResponse{
		Code:         int32(response.ErrCodeSuccess),
		Pagecategory: &pagecategory,
	}, nil
}

func (pt *PagecategoryTransport) DeletePagecategory(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := pt.PagecategoryService.DeletePagecategory(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code:    int32(response.ErrCodeDeleteFail),
			Message: "error deleting pagecategory",
		}, nil
	}
	return &pb.MessageResponse{
		Code:    int32(response.ErrCodeSuccess),
		Message: "Pagecategory deleted",
	}, nil
}
