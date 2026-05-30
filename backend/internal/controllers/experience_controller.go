package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type ExperienceController struct {
	experienceRepository *repositories.ExperienceRepository
}

func NewExperienceController(experienceRepository *repositories.ExperienceRepository) *ExperienceController {
	return &ExperienceController{
		experienceRepository: experienceRepository,
	}
}

func (controller *ExperienceController) GetExperiences(ctx *gin.Context) {
	experiences := controller.experienceRepository.FindAll()

	utils.Success(
		ctx,
		http.StatusOK,
		"experiences fetched successfully",
		experiences,
	)
}