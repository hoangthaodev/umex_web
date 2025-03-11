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

func (is *ImageService) CreateNewImage(url string, title string, alt string, caption string) (*pb.ImageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.CreateNewImage(context.Background(), &pb.Image{
		ImageUrl:     url,
		ImageTitle:   title,
		ImageAlt:     alt,
		ImageCaption: caption,
	})
}

func (is *ImageService) UpdateImage(imageId int64, url string, title string, alt string, caption string) (*pb.MessageResponse, error) {
	conn := utils.ConnectToService(global.Config.Server.MainServer)
	defer conn.Close()

	client := pb.NewImageServiceClient(conn)

	return client.UpdateImage(context.Background(), &pb.Image{
		ImageId:      imageId,
		ImageUrl:     url,
		ImageTitle:   title,
		ImageAlt:     alt,
		ImageCaption: caption,
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
