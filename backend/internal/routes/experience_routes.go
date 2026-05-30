package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterExperienceRoutes(router *gin.Engine, experienceController *controllers.ExperienceController) {
	api := router.Group("/api/v1")

	api.GET("/experiences", experienceController.GetExperiences)
}