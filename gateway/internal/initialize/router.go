package initialize

import (
	"fmt"
	"gateway/global"
	"gateway/internal/middleware"
	"gateway/internal/routers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InitRouter() {
	var r *gin.Engine
	mode := global.Config.Server.Mode
	if mode == "debug" {
		gin.SetMode(gin.DebugMode)
		r = gin.Default()
	} else {
		gin.SetMode(gin.ReleaseMode)
		r = gin.New()
	}

	// Middleware
	r.Use(middleware.Logger())
	r.Use(middleware.CORS())
	// limiter := rate.NewLimiter(rate.Every(10*time.Second), 20)
	// r.Use(middleware.Limiter(limiter))

	adminRouter := routers.RouterGroupApp.Admin
	// userRouter := routers.RouterGroupApp.User

	mainGroup := r.Group("v1")
	{
		mainGroup.GET("/checkstatus", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"code":    2000,
				"message": "Tracking status OK!",
			})
		})
	}
	{
		adminRouter.InitUserRouter(mainGroup)
		adminRouter.InitConfigRouter(mainGroup)
		adminRouter.InitComponentRouter(mainGroup)
		adminRouter.InitImageRouter(mainGroup)
		adminRouter.InitMenuRouter(mainGroup)
		adminRouter.InitMenuLocationRouter(mainGroup)
		adminRouter.InitCategoryRouter(mainGroup)
		adminRouter.InitTypeRouter(mainGroup)
		adminRouter.InitTagRouter(mainGroup)
		adminRouter.InitPagetagRouter(mainGroup)
		adminRouter.InitPageRouter(mainGroup)
		adminRouter.InitPagecategoryRouter(mainGroup)
	}

	run := fmt.Sprintf("%s:%d", global.Config.Server.Host, global.Config.Server.Port)
	r.Run(run)
}
