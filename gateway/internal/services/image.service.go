package services

import (
	"context"
	"gateway/global"
	"gateway/internal/utils"
	"gateway/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ImageService struct{}

func (is *ImageService) GetAllImage() (*pb.ManyImageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.GetAllImage(context.Background(), &emptypb.Empty{})
}

func (is *ImageService) GetImageById(imageId int64) (*pb.ImageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.GetImageById(context.Background(), &pb.NumbRequest{
		Numb: imageId,
	})
}

func (is *ImageService) CreateNewImage(src string, title string, alt string, caption string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.CreateNewImage(context.Background(), &pb.Image{
		ImgSrc:     src,
		ImgTitle:   title,
		ImgAlt:     alt,
		ImgCaption: caption,
	})
}

func (is *ImageService) UpdateImage(imageId int64, src string, title string, alt string, caption string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.UpdateImage(context.Background(), &pb.Image{
		ImgId:      imageId,
		ImgSrc:     src,
		ImgTitle:   title,
		ImgAlt:     alt,
		ImgCaption: caption,
	})
}
func (is *ImageService) DeleteImage(imageId int64) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.DeleteImage(context.Background(), &pb.NumbRequest{
		Numb: imageId,
	})
}
