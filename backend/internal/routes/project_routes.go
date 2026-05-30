package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterProjectRoutes(router *gin.Engine, projectController *controllers.ProjectController) {
	api := router.Group("/api/v1")

	api.GET("/projects", projectController.GetProjects)
	api.GET("/projects/all", projectController.GetAllProjects)
	api.GET("/projects/:slug", projectController.GetProjectBySlug)
}