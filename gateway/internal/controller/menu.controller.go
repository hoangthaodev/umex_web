package controller

import (
	"gateway/internal/services"
	"gateway/internal/utils"
	"gateway/pkg/response"
	"log"

	"github.com/gin-gonic/gin"
)

type MenuController struct {
	services.MenuService
}

func (mc *MenuController) GetAllMenu(c *gin.Context) {
	res, err := mc.MenuService.GetAllMenu()
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mc *MenuController) GetMenuById(c *gin.Context) {
	id := c.Param("id")
	res, err := mc.MenuService.GetMenuById(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mc *MenuController) CreateNewMenu(c *gin.Context) {
	var menu utils.Menu
	err := c.ShouldBindJSON(&menu)
	if err != nil {
		log.Println("Error binding json menu")
		return
	}

	res, err := mc.MenuService.CreateNewMenu(menu.MenuName, menu.MenuValue, menu.MenuSlug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mc *MenuController) UpdateMenu(c *gin.Context) {
	id := c.Param("id")
	var menu utils.Menu
	err := c.ShouldBindJSON(&menu)
	if err != nil {
		log.Println("Error binding json menu")
		return
	}

	res, err := mc.MenuService.UpdateMenu(utils.StringToInt64(id), menu.MenuName, menu.MenuValue, menu.MenuSlug)
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}

func (mc *MenuController) DeleteMenu(c *gin.Context) {
	id := c.Param("id")
	res, err := mc.MenuService.DeleteMenu(utils.StringToInt64(id))
	if err != nil {
		response.ErrorResponse(c, int(res.Code), "")
		return
	}
	response.SuccessResponse(c, int(res.Code), res)
}
