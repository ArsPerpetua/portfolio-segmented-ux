package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type AchievementController struct {
	achievementRepository *repositories.AchievementRepository
}

func NewAchievementController(achievementRepository *repositories.AchievementRepository) *AchievementController {
	return &AchievementController{
		achievementRepository: achievementRepository,
	}
}

func (controller *AchievementController) GetAchievements(ctx *gin.Context) {
	achievements := controller.achievementRepository.FindAll()

	utils.Success(
		ctx,
		http.StatusOK,
		"achievements fetched successfully",
		achievements,
	)
}