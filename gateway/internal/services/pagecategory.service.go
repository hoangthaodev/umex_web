package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type PagecategoryService struct{}

func (ps *PagecategoryService) GetAllPagecategory() (*pb.ManyPagecategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.GetAllPagecategory(context.Background(), &emptypb.Empty{})
}

func (ps *PagecategoryService) GetPagecategoryByCategory(catId int64) (*pb.ManyPagecategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.GetPagecategoryByCategory(context.Background(), &pb.NumbRequest{
		Numb: catId,
	})
}

func (ps *PagecategoryService) GetPagecategoryByPage(pageId int64) (*pb.ManyPagecategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.GetPagecategoryByPage(context.Background(), &pb.NumbRequest{
		Numb: pageId,
	})
}

func (ps *PagecategoryService) CreateNewPagecategory(pageId int64, catId int64, slug string) (*pb.PagecategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.CreateNewPagecategory(context.Background(), &pb.Pagecategory{
		PageId:           pageId,
		CategoryId:       catId,
		PagecategorySlug: slug,
	})
}

func (ps *PagecategoryService) DeletePagecategory(pagecateId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.DeletePagecategory(context.Background(), &pb.NumbRequest{
		Numb: pagecateId,
	})
}
