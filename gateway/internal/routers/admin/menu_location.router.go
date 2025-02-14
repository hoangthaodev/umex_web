package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type MenuLocationRouter struct {
	controller.MenuLocationController
}

func (mlr *MenuLocationRouter) InitMenuLocationRouter(router *gin.RouterGroup) {

	// private route
	privateMenuLocationRouter := router.Group("/admin/menu_locations")
	// middlewares
	privateMenuLocationRouter.Use(middleware.Authorization())
	privateMenuLocationRouter.Use(middleware.Permission())
	{
		privateMenuLocationRouter.GET("", mlr.MenuLocationController.GetAllLocation)
		privateMenuLocationRouter.GET("/:id", mlr.MenuLocationController.GetLocationById)
		privateMenuLocationRouter.GET("/menu/:id", mlr.MenuLocationController.GetLocationByMenuId)
		privateMenuLocationRouter.PUT("/:id", mlr.MenuLocationController.UpdateMenuLocation)
	}
}
