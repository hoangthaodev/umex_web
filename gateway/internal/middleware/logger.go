package middleware

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		c.Next()

		duration := time.Since(start)
		status := c.Writer.Status()
		method := c.Request.Method
		path := c.Request.URL.Path
		ip := c.ClientIP()

		file, err := os.OpenFile(fmt.Sprintf("storages/requests/%s.log", time.Now().Format("2006-01-02")), os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
		if err != nil {
			log.Fatal("Khong ghi duoc file log request::", err)
		}
		defer file.Close()

		logger := log.New(file, "", log.LstdFlags)

		logger.Printf("[%s] %s %s %d %v", method, ip, path, status, duration)
	}
}
