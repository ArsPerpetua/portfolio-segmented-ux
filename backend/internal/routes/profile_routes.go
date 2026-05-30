package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterProfileRoutes(router *gin.Engine, profileController *controllers.ProfileController) {
	api := router.Group("/api/v1")

	api.GET("/profile", profileController.GetProfile)
}