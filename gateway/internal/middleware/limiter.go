package middleware

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/time/rate"
)

func Limiter(limiter *rate.Limiter) gin.HandlerFunc {
	return func(c *gin.Context) {
		if !limiter.Allow() {
			c.JSON(429, gin.H{
				"message": "Too many requests, please try again later",
			})

			c.Abort()
			return
		}

		c.Next()
	}
}
