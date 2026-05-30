package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterAnalyticsRoutes(router *gin.Engine, analyticsController *controllers.AnalyticsController) {
	api := router.Group("/api/v1")

	api.POST("/analytics", analyticsController.Track)
	api.GET("/analytics/summary", analyticsController.GetSummary)
}