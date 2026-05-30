package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type SkillController struct {
	skillRepository *repositories.SkillRepository
}

func NewSkillController(skillRepository *repositories.SkillRepository) *SkillController {
	return &SkillController{
		skillRepository: skillRepository,
	}
}

func (controller *SkillController) GetSkills(ctx *gin.Context) {
	skills := controller.skillRepository.FindAll()

	utils.Success(
		ctx,
		http.StatusOK,
		"skills fetched successfully",
		skills,
	)
}