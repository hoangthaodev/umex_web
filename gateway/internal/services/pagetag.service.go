package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type PagetagService struct{}

func (ps *PagetagService) GetAllPagetag() (*pb.ManyPagetagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.GetAllPagetag(context.Background(), &emptypb.Empty{})
}

func (ps *PagetagService) GetPagetagByTag(tagId int64) (*pb.ManyPagetagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.GetPagetagByTag(context.Background(), &pb.NumbRequest{
		Numb: tagId,
	})
}

func (ps *PagetagService) GetPagetagByPage(pageId int64) (*pb.ManyPagetagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.GetPagetagByPage(context.Background(), &pb.NumbRequest{
		Numb: pageId,
	})
}

func (ps *PagetagService) CreateNewPagetag(pageId int64, tagId int64, slug string) (*pb.PagetagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewPagetagServiceClient(conn)
	return client.CreateNewPagetag(context.Background(), &pb.Pagetag{
		PageId:      pageId,
		TagId:       tagId,
		PagetagSlug: slug,
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
