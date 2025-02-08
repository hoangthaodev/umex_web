package transport

import (
	"context"
	"main_service/internal/services"
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
		return &pb.ManyImageResponse{
			Code: 2001,
		}, nil
	}

	var images []*pb.Image
	for _, img := range allImage {
		var image pb.Image
		image.ImgId = img.ImageID
		image.ImgSrc = img.ImageSrc
		image.ImgTitle = img.ImageTitle
		image.ImgAlt = img.ImageAlt
		image.ImgCaption = img.ImageCaption

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
		return &pb.ImageResponse{
			Code: 2001,
		}, nil
	}

	return &pb.ImageResponse{
		Code: 2000,
		Image: &pb.Image{
			ImgId:      image.ImageID,
			ImgSrc:     image.ImageSrc,
			ImgTitle:   image.ImageTitle,
			ImgAlt:     image.ImageTitle,
			ImgCaption: image.ImageCaption,
		},
	}, nil
}
func (it *ImageTransport) CreateNewImage(c context.Context, in *pb.Image) (*pb.MessageResponse, error) {
	err := it.ImageService.CreateNewImage(in.ImgTitle, in.ImgSrc, in.ImgAlt, in.ImgCaption)
	if err != nil {
		return &pb.MessageResponse{
			Code: 2002,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "New image created",
	}, nil
}
func (it *ImageTransport) UpdateImage(c context.Context, in *pb.Image) (*pb.MessageResponse, error) {
	err := it.ImageService.UpdateImage(in.ImgTitle, in.ImgSrc, in.ImgAlt, in.ImgCaption, in.ImgId)
	if err != nil {
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
		return &pb.MessageResponse{
			Code: 2004,
		}, nil
	}

	return &pb.MessageResponse{
		Code:    2000,
		Message: "Image deleted",
	}, nil
}
