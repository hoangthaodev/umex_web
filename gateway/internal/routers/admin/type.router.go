package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type TypeRouter struct {
	controller.TypeController
}

func (tc *TypeRouter) InitTypeRouter(router *gin.RouterGroup) {
	// private
	privateTypeRouter := router.Group("/admin/types")
	// middlewares
	privateTypeRouter.Use(middleware.Authorization())
	privateTypeRouter.Use(middleware.Permission())
	{
		privateTypeRouter.GET("", tc.TypeController.GetAllType)
		privateTypeRouter.GET("/:id", tc.TypeController.GetTypeById)
		privateTypeRouter.POST("", tc.TypeController.CreateNewType)
		privateTypeRouter.PUT("/:id", tc.TypeController.UpdateType)
		privateTypeRouter.DELETE("/:id", tc.TypeController.DeleteType)
	}
}
