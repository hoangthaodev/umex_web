package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type CategoryTransport struct {
	pb.UnimplementedCategoryServiceServer
	services.CategoryService
}

func (ct *CategoryTransport) GetAllCategory(context.Context, *emptypb.Empty) (*pb.ManyCategoryResponse, error) {
	res, err := ct.CategoryService.GetAllCategories()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyCategoryResponse{
			Code: 2001,
		}, nil
	}
	var categories []*pb.Category
	for _, c := range res {
		var category pb.Category
		category.CategoryId = c.CategoryID
		category.CategoryName = c.CategoryName
		category.CategorySlug = c.CategorySlug
		category.TypeId = c.TypeID
		category.CategoryParent = c.CategoryParent

		categories = append(categories, &category)
	}

	return &pb.ManyCategoryResponse{
		Code:       2000,
		Categories: categories,
	}, nil
}

func (ct *CategoryTransport) GetCategoryById(c context.Context, in *pb.NumbRequest) (*pb.CategoryResponse, error) {
	res, err := ct.CategoryService.GetCategoryById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.CategoryResponse{
			Code: 2001,
		}, nil
	}
	var category pb.Category
	category.CategoryId = res.CategoryID
	category.CategoryName = res.CategoryName
	category.CategorySlug = res.CategorySlug
	category.TypeId = res.TypeID
	category.CategoryParent = res.CategoryParent

	return &pb.CategoryResponse{
		Code:     2000,
		Category: &category,
	}, nil
}

func (ct *CategoryTransport) GetCategoryBySlug(c context.Context, in *pb.StrRequest) (*pb.CategoryResponse, error) {
	res, err := ct.CategoryService.GetCategoryBySlug(in.Str)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.CategoryResponse{
			Code: 2001,
		}, nil
	}
	var category pb.Category
	category.CategoryId = res.CategoryID
	category.CategoryName = res.CategoryName
	category.CategorySlug = res.CategorySlug
	category.TypeId = res.TypeID
	category.CategoryParent = res.CategoryParent

	return &pb.CategoryResponse{
		Code:     2000,
		Category: &category,
	}, nil
}

func (ct *CategoryTransport) GetCategoryByType(c context.Context, in *pb.NumbRequest) (*pb.ManyCategoryResponse, error) {
	res, err := ct.CategoryService.GetCategoryByType(int32(in.Numb))
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyCategoryResponse{
			Code: 2001,
		}, nil
	}
	var categories []*pb.Category
	for _, c := range res {
		var category pb.Category
		category.CategoryId = c.CategoryID
		category.CategoryName = c.CategoryName
		category.CategorySlug = c.CategorySlug
		category.TypeId = c.TypeID
		category.CategoryParent = c.CategoryParent

		categories = append(categories, &category)
	}

	return &pb.ManyCategoryResponse{
		Code:       2000,
		Categories: categories,
	}, nil
}

func (ct *CategoryTransport) GetCategoryByParent(c context.Context, in *pb.NumbRequest) (*pb.ManyCategoryResponse, error) {
	res, err := ct.CategoryService.GetCategoryByParent(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyCategoryResponse{
			Code: 2001,
		}, nil
	}
	var categories []*pb.Category
	for _, c := range res {
		var category pb.Category
		category.CategoryId = c.CategoryID
		category.CategoryName = c.CategoryName
		category.CategorySlug = c.CategorySlug
		category.TypeId = c.TypeID
		category.CategoryParent = c.CategoryParent

		categories = append(categories, &category)
	}

	return &pb.ManyCategoryResponse{
		Code:       2000,
		Categories: categories,
	}, nil
}

func (ct *CategoryTransport) CreateNewCategory(c context.Context, in *pb.Category) (*pb.MessageResponse, error) {
	err := ct.CategoryService.CreateNewCategory(in.CategoryName, in.CategorySlug, in.CategoryDescription, in.CategoryParent, in.TypeId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2002,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "New category created",
	}, nil
}

func (ct *CategoryTransport) UpdateCategory(c context.Context, in *pb.Category) (*pb.MessageResponse, error) {
	err := ct.CategoryService.UpdateCategory(in.CategoryName, in.CategorySlug, in.CategoryDescription, in.CategoryParent, in.TypeId, in.CategoryId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2003,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Category updated",
	}, nil
}

func (ct *CategoryTransport) DeleteCategory(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := ct.CategoryService.DeleteCategory(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2004,
		}, nil
	}
	return &pb.MessageResponse{
		Code:    2000,
		Message: "Category deleted",
	}, nil
}
