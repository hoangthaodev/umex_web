package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type CategoryService struct{}

func (cs *CategoryService) GetAllCategory() (*pb.ManyCategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.GetAllCategory(context.Background(), &emptypb.Empty{})
}

func (cs *CategoryService) GetCategoryById(catId int64) (*pb.CategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.GetCategoryById(context.Background(), &pb.NumbRequest{
		Numb: catId,
	})
}

func (cs *CategoryService) GetCategoryBySlug(catSlug string) (*pb.CategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.GetCategoryBySlug(context.Background(), &pb.MessageRequest{
		Str: catSlug,
	})
}

func (cs *CategoryService) GetCategoryByType(typeId int64) (*pb.ManyCategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.GetCategoryByType(context.Background(), &pb.NumbRequest{
		Numb: typeId,
	})
}

func (cs *CategoryService) GetCategoryByParent(parentId int64) (*pb.ManyCategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.GetCategoryByParent(context.Background(), &pb.NumbRequest{
		Numb: parentId,
	})
}

func (cs *CategoryService) CreateNewCategory(catName string, catSlug string, catDes string, catParent int64, typeId int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.CreateNewCategory(context.Background(), &pb.Category{
		CategoryName:        catName,
		CategorySlug:        catSlug,
		CategoryDescription: catDes,
		CategoryParent:      catParent,
		TypeId:              typeId,
	})
}

func (cs *CategoryService) UpdateCategory(catId int64, catName string, catSlug string, catDes string, catParent int64, typeId int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.UpdateCategory(context.Background(), &pb.Category{
		CategoryId:          catId,
		CategoryName:        catName,
		CategorySlug:        catSlug,
		CategoryDescription: catDes,
		CategoryParent:      catParent,
		TypeId:              typeId,
	})
}

func (cs *CategoryService) DeleteCategory(catId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewCategoryServiceClient(conn)
	return client.DeleteCategory(context.Background(), &pb.NumbRequest{
		Numb: catId,
	})
}
