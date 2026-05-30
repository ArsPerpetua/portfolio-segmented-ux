package routes

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterSkillRoutes(router *gin.Engine, skillController *controllers.SkillController) {
	api := router.Group("/api/v1")

	api.GET("/skills", skillController.GetSkills)
}