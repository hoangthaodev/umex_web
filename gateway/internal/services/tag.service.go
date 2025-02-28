package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type TagService struct{}

func (ts *TagService) GetAllTag() (*pb.ManyTagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.GetAllTag(context.Background(), &emptypb.Empty{})
}

func (ts *TagService) GetTagById(tagId int64) (*pb.TagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.GetTagById(context.Background(), &pb.NumbRequest{
		Numb: tagId,
	})
}

func (ts *TagService) GetTagByType(typeId int64) (*pb.ManyTagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.GetTagByType(context.Background(), &pb.NumbRequest{
		Numb: typeId,
	})
}

func (ts *TagService) GetTagBySlug(slug string) (*pb.TagResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.GetTagBySlug(context.Background(), &pb.MessageRequest{
		Str: slug,
	})
}

func (ts *TagService) CreateNewTag(tagName string, tagSlug string, tagDes string, typeId int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.CreateNewTag(context.Background(), &pb.Tag{
		TagName:        tagName,
		TagSlug:        tagSlug,
		TagDescription: tagDes,
		TypeId:         typeId,
	})
}

func (ts *TagService) UpdateTag(tagId int64, tagName string, tagSlug string, tagDes string, typeId int32) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.UpdateTag(context.Background(), &pb.Tag{
		TagId:          tagId,
		TagName:        tagName,
		TagSlug:        tagSlug,
		TagDescription: tagDes,
		TypeId:         typeId,
	})
}

func (ts *TagService) DeleteTag(tagId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewTagServiceClient(conn)
	return client.DeleteTag(context.Background(), &pb.NumbRequest{
		Numb: tagId,
	})
}
