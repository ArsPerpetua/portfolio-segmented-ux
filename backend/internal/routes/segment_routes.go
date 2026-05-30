package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterSegmentRoutes(router *gin.Engine, segmentController *controllers.SegmentController) {
	api := router.Group("/api/v1")

	api.GET("/segments", segmentController.GetSegments)
}