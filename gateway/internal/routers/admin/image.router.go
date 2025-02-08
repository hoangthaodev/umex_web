package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type ImageRouter struct {
	controller.ImageController
}

func (ir *ImageRouter) InitImageRouter(router *gin.RouterGroup) {
	// public
	publicImageRouter := router.Group("/image")
	{
		publicImageRouter.GET("/:id", ir.GetImageById)
	}

	// private
	privateImageRouter := router.Group("/admin/images")
	// middlewares
	privateImageRouter.Use(middleware.Authorization())
	privateImageRouter.Use(middleware.Permission())
	{
		privateImageRouter.GET("", ir.GetAllImage)
		privateImageRouter.POST("", ir.CreateNewImage)
		privateImageRouter.PUT("/:id", ir.UpdateImage)
		privateImageRouter.DELETE("/:id", ir.DeleteImage)
	}
}
