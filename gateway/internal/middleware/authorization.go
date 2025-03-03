package middleware

import (
	"gateway/internal/services"
	"gateway/pkg/response"

	"github.com/gin-gonic/gin"
)

func Authorization() gin.HandlerFunc {
	return func(c *gin.Context) {
		authorization := c.GetHeader("Authorization")
		res, err := new(services.AuthService).CheckAuth(authorization)

		if err != nil || res.Code != 2000 {
			response.ErrorResponse(c, int(res.Code), "error: Unauthorized")
			c.Abort()
			return
		}

		c.Set("role_id", res.Auth.RoleId)
		c.Next()
	}
}

func Permission() gin.HandlerFunc {
	return func(c *gin.Context) {
		if roleId, exists := c.Get("role_id"); roleId != int32(111) || !exists {
			response.ErrorResponse(c, 3002, "error: Forbidden")
			c.Abort()
			return
		}
		c.Next()
	}
}
