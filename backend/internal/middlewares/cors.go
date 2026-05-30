package middlewares

import (
	"os"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	allowedOrigins := []string{
		"http://localhost:5173",
		"http://127.0.0.1:5173",
	}

	if productionOrigin := os.Getenv("CORS_ALLOWED_ORIGIN"); productionOrigin != "" {
		origins := strings.Split(productionOrigin, ",")

		for _, origin := range origins {
			trimmedOrigin := strings.TrimSpace(origin)
			if trimmedOrigin != "" {
				allowedOrigins = append(allowedOrigins, trimmedOrigin)
			}
		}
	}

	config := cors.DefaultConfig()
	config.AllowOrigins = allowedOrigins
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	config.AllowCredentials = false

	return cors.New(config)
}