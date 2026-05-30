package middlewares

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func RequestLogger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		startTime := time.Now()

		ctx.Next()

		latency := time.Since(startTime)
		method := ctx.Request.Method
		path := ctx.Request.URL.Path
		statusCode := ctx.Writer.Status()

		log.Printf(
			"%s %s %d %s",
			method,
			path,
			statusCode,
			latency,
		)
	}
}