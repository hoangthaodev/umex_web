package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type MenuRouter struct {
	controller.MenuController
}

func (mr *MenuRouter) InitMenuRouter(router *gin.RouterGroup) {
	// public router
	publicMenuRouter := router.Group("/menu")
	{
		publicMenuRouter.GET("/:id", mr.MenuController.GetMenuById)
	}

	// private router
	privateMenuRouter := router.Group("/admin/menus")
	// middlewares
	privateMenuRouter.Use(middleware.Authorization())
	privateMenuRouter.Use(middleware.Permission())
	{
		privateMenuRouter.GET("", mr.MenuController.GetAllMenu)
		privateMenuRouter.POST("", mr.MenuController.CreateNewMenu)
		privateMenuRouter.PUT("/:id", mr.MenuController.UpdateMenu)
		privateMenuRouter.DELETE("/:id", mr.MenuController.DeleteMenu)
	}
}
