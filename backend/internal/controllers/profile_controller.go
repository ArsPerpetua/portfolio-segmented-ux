package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type ProfileController struct {
	profileRepository *repositories.ProfileRepository
}

func NewProfileController(profileRepository *repositories.ProfileRepository) *ProfileController {
	return &ProfileController{
		profileRepository: profileRepository,
	}
}

func (controller *ProfileController) GetProfile(ctx *gin.Context) {
	profile := controller.profileRepository.GetProfile()

	utils.Success(
		ctx,
		http.StatusOK,
		"profile fetched successfully",
		profile,
	)
}