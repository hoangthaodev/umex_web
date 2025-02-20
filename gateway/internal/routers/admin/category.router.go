package admin

import (
	"gateway/internal/controller"
	"gateway/internal/middleware"

	"github.com/gin-gonic/gin"
)

type CategoryRouter struct {
	controller.CategoryController
}

func (cr *CategoryRouter) InitCategoryRouter(router *gin.RouterGroup) {

	// private
	privateCategoryRouter := router.Group("/admin/categories")
	// middlewares
	privateCategoryRouter.Use(middleware.Authorization())
	privateCategoryRouter.Use(middleware.Permission())
	{
		privateCategoryRouter.GET("/:id", cr.CategoryController.GetCategoryById)
		privateCategoryRouter.GET("/parent/:id", cr.CategoryController.GetCategoryByParent)
		privateCategoryRouter.GET("/slug/:slug", cr.CategoryController.GetCategoryBySlug)
		privateCategoryRouter.GET("", cr.CategoryController.GetAllCategory)
		privateCategoryRouter.GET("/type/:id", cr.CategoryController.GetCategoryByType)
		privateCategoryRouter.POST("", cr.CategoryController.CreateNewCategory)
		privateCategoryRouter.PUT("/:id", cr.CategoryController.UpdateCategory)
		privateCategoryRouter.DELETE("/:id", cr.CategoryController.DeleteCategory)
	}
}
