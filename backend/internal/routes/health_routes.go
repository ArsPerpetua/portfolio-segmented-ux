package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterHealthRoutes(router *gin.Engine, healthController *controllers.HealthController) {
	router.GET("/health", healthController.Check)
}