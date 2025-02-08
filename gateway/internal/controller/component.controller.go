package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type ComponentController struct {
	services.ComponentService
}

func (cpc *ComponentController) GetAllComponent(c *gin.Context) {
	res, err := cpc.ComponentService.GetAllComponent()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cpc *ComponentController) GetComponentById(c *gin.Context) {
	id := c.Param("id")
	compId := utils.StringToInt64(id)

	res, err := cpc.ComponentService.GetComponentById(compId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cpc *ComponentController) GetComponentByName(c *gin.Context) {
	name := c.Param("name")

	res, err := cpc.ComponentService.GetComponentByName(name)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cpc *ComponentController) GetComponentByPosition(c *gin.Context) {
	position := c.Param("position")
	pos := utils.StringToInt64(position)

	res, err := cpc.ComponentService.GetComponentByPosition(pos)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cpc *ComponentController) CreateNewComponent(c *gin.Context) {
	var component utils.Component

	err := c.ShouldBindJSON(&component)
	if err != nil {
		log.Println("Error binding json component")
		return
	}

	res, err := cpc.ComponentService.CreateNewComponent(component.CompName, component.CompPosition, component.CompIndex)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cpc *ComponentController) UpdateComponent(c *gin.Context) {
	id := c.Param("id")
	compId := utils.StringToInt64(id)

	var component utils.Component
	err := c.ShouldBindJSON(&component)
	if err != nil {
		log.Println("Error binding json component")
		return
	}

	res, err := cpc.ComponentService.UpdateComponent(compId, component.CompName, component.CompPosition, component.CompIndex)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}

func (cpc *ComponentController) DeleteComponent(c *gin.Context) {
	id := c.Param("id")
	compId := utils.StringToInt64(id)

	res, err := cpc.ComponentService.DeleteComponent(compId)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}

	response.SuccessResponse(c, int(res.Code), res)
}
