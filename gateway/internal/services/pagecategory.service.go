package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"
)

type PagecategoryService struct{}

func (ps *PagecategoryService) GetPageByCategory(catId int64, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.GetPageByCategory(context.Background(), &pb.Pagecategory{
		CategoryId: catId,
		Limit:      limit,
		Offset:     offset,
	})
}

func (ps *PagecategoryService) GetCategoryByPage(pageId int64) (*pb.ManyCategoryResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.GetCategoryByPage(context.Background(), &pb.NumbRequest{
		Numb: pageId,
	})
}

func (ps *PagecategoryService) CreateNewPagecategory(pageId int64, catId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagecategoryServiceClient(conn)
	return client.CreateNewPagecategory(context.Background(), &pb.Pagecategory{
		PageId:     pageId,
		CategoryId: catId,
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
