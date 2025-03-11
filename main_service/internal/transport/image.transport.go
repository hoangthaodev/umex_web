package transport

import (
	"context"
	"main_service/global"
	"main_service/internal/services"
	"main_service/pkg/response"
	"main_service/proto/pb"

	"google.golang.org/protobuf/types/known/emptypb"
)

type ImageTransport struct {
	pb.UnimplementedImageServiceServer
	services.ImageService
}

func (it *ImageTransport) GetAllImage(c context.Context, _ *emptypb.Empty) (*pb.ManyImageResponse, error) {
	allImage, err := it.ImageService.GetAllImage()
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ManyImageResponse{
			Code: 2001,
		}, nil
	}

	var images []*pb.Image
	for _, img := range allImage {
		var image pb.Image
		image.ImageId = img.ImageID
		image.ImageUrl = img.ImageUrl
		image.ImageTitle = img.ImageTitle
		image.ImageAlt = img.ImageAlt
		image.ImageCaption = img.ImageCaption

		images = append(images, &image)
	}

	return &pb.ManyImageResponse{
		Code:   2000,
		Images: images,
	}, nil
}
func (it *ImageTransport) GetImageById(c context.Context, in *pb.NumbRequest) (*pb.ImageResponse, error) {
	image, err := it.ImageService.GetImageById(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ImageResponse{
			Code: 2001,
		}, nil
	}

	return &pb.ImageResponse{
		Code: 2000,
		Image: &pb.Image{
			ImageId:      image.ImageID,
			ImageUrl:     image.ImageUrl,
			ImageTitle:   image.ImageTitle,
			ImageAlt:     image.ImageTitle,
			ImageCaption: image.ImageCaption,
		},
	}, nil
}
func (it *ImageTransport) CreateNewImage(c context.Context, in *pb.Image) (*pb.ImageResponse, error) {
	res, err := it.ImageService.CreateNewImage(in.ImageTitle, in.ImageUrl, in.ImageAlt, in.ImageCaption)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.ImageResponse{
			Code: int32(response.ErrCodeCreateFail),
		}, nil
	}
	var image pb.Image
	image.ImageId = res.ImageID
	image.ImageUrl = res.ImageUrl
	image.ImageTitle = res.ImageTitle
	image.ImageAlt = res.ImageAlt
	image.ImageCaption = res.ImageCaption

	return &pb.ImageResponse{
		Code:  int32(response.ErrCodeSuccess),
		Image: &image,
	}, nil
}
func (it *ImageTransport) UpdateImage(c context.Context, in *pb.Image) (*pb.MessageResponse, error) {
	err := it.ImageService.UpdateImage(in.ImageTitle, in.ImageUrl, in.ImageAlt, in.ImageCaption, in.ImageId)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2003,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Image updated",
	}, nil
}
func (it *ImageTransport) DeleteImage(c context.Context, in *pb.NumbRequest) (*pb.MessageResponse, error) {
	err := it.ImageService.DeleteImage(in.Numb)
	if err != nil {
		global.Logger.Error(err.Error())
		return &pb.MessageResponse{
			Code: 2004,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Image deleted",
	}, nil
}
