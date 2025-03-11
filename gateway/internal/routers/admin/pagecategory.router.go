package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type PagecategoryRouter struct {
	controller.PagecategoryController
}

func (pc *PagecategoryRouter) InitPagecategoryRouter(router *gin.RouterGroup) {
	// private
	privatePagecategoryRouter := router.Group("/admin/pagecategories")
	// middleware
	privatePagecategoryRouter.Use(middleware.Authorization())
	privatePagecategoryRouter.Use(middleware.Permission())
	{
		privatePagecategoryRouter.GET("/category/:id", pc.PagecategoryController.GetPagecategoryByCategory)
		privatePagecategoryRouter.GET("/page/:id", pc.PagecategoryController.GetPagecategoryByPage)
		privatePagecategoryRouter.POST("", pc.PagecategoryController.CreateNewPagecategory)
		privatePagecategoryRouter.DELETE("/:id", pc.PagecategoryController.DeletePagecategory)
	}
}
