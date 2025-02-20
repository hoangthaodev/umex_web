package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type ImageController struct {
	services.ImageService
}

func (ic *ImageController) GetAllImage(c *gin.Context) {
	res, err := ic.ImageService.GetAllImage()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (ic *ImageController) GetImageById(c *gin.Context) {
	id := c.Param("id")
	imgId := utils.StringToInt64(id)

	res, err := ic.ImageService.GetImageById(imgId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (ic *ImageController) CreateNewImage(c *gin.Context) {
	var image utils.Image

	err := c.ShouldBindJSON(&image)
	if err != nil {
		log.Println("Error binding json image")
		return
	}

	res, err := ic.ImageService.CreateNewImage(image.ImgUrl, image.ImgTitle, image.ImgAlt, image.ImgCaption)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (ic *ImageController) UpdateImage(c *gin.Context) {
	id := c.Param("id")
	imgId := utils.StringToInt64(id)

	var image utils.Image

	err := c.ShouldBindJSON(&image)
	if err != nil {
		log.Println("Error binding json image")
		return
	}

	res, err := ic.ImageService.UpdateImage(imgId, image.ImgUrl, image.ImgTitle, image.ImgAlt, image.ImgCaption)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (ic *ImageController) DeleteImage(c *gin.Context) {
	id := c.Param("id")
	imgId := utils.StringToInt64(id)

	res, err := ic.ImageService.DeleteImage(imgId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}
