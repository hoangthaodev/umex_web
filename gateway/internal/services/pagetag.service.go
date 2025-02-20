package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"
)

type PagetagService struct{}

func (ps *PagetagService) GetPageByTag(tagId int64, limit int32, offset int32) (*pb.ManyPageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.GetPageByTag(context.Background(), &pb.Pagetag{
		TagId:  tagId,
		Limit:  limit,
		Offset: offset,
	})
}

func (ps *PagetagService) GetTagByPage(pageId int64) (*pb.ManyTagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.GetTagByPage(context.Background(), &pb.NumbRequest{
		Numb: pageId,
	})
}

func (ps *PagetagService) CreateNewPagetag(pageId int64, tagId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.CreateNewPagetag(context.Background(), &pb.Pagetag{
		PageId: pageId,
		TagId:  tagId,
	})
}

func (ps *PagetagService) DeletePagetag(pagetagId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.DeletePagetag(context.Background(), &pb.NumbRequest{
		Numb: pagetagId,
	})
}
