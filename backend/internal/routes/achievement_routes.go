package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterAchievementRoutes(router *gin.Engine, achievementController *controllers.AchievementController) {
	api := router.Group("/api/v1")

	api.GET("/achievements", achievementController.GetAchievements)
}