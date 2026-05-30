package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type EducationController struct {
	educationRepository *repositories.EducationRepository
}

func NewEducationController(educationRepository *repositories.EducationRepository) *EducationController {
	return &EducationController{
		educationRepository: educationRepository,
	}
}

func (controller *EducationController) GetEducation(ctx *gin.Context) {
	education := controller.educationRepository.FindAll()

	utils.Success(
		ctx,
		http.StatusOK,
		"education fetched successfully",
		education,
	)
}