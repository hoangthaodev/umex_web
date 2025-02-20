package services

import (
	"context"
	"main_service/global"
	"main_service/internal/database"
	"main_service/internal/utils"
	"time"
)

type ImageService struct{}

func (is *ImageService) GetAllImage() ([]database.TbImage, error) {
	queries := database.New(global.Mysql)

	return queries.GetAllImage(context.Background())
}

func (is *ImageService) GetImageById(imageId int64) (database.TbImage, error) {
	queries := database.New(global.Mysql)

	return queries.GetImageById(context.Background(), imageId)
}

func (is *ImageService) CreateNewImage(title string, url string, alt string, caption string) error {
	queries := database.New(global.Mysql)

	create_at := utils.TimeToInt64(time.Now())

	return queries.CreateNewImage(context.Background(), database.CreateNewImageParams{
		ImageTitle:   title,
		ImageUrl:     url,
		ImageAlt:     alt,
		ImageCaption: caption,
		CreatedAt:    create_at,
	})
}

func (is *ImageService) UpdateImage(title string, url string, alt string, caption string, imageId int64) error {
	queries := database.New(global.Mysql)

	update_at := utils.TimeToInt64(time.Now())

	return queries.UpdateImage(context.Background(), database.UpdateImageParams{
		ImageTitle:   title,
		ImageUrl:     url,
		ImageAlt:     alt,
		ImageCaption: caption,
		UpdatedAt:    update_at,
		ImageID:      imageId,
	})
}

func (is *ImageService) DeleteImage(imageId int64) error {
	queries := database.New(global.Mysql)

	return queries.DeleteImage(context.Background(), imageId)
}
