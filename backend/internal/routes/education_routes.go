package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterEducationRoutes(router *gin.Engine, educationController *controllers.EducationController) {
	api := router.Group("/api/v1")

	api.GET("/education", educationController.GetEducation)
}