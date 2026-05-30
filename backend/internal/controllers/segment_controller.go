package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type SegmentController struct {
	segmentRepository *repositories.SegmentRepository
}

func NewSegmentController(segmentRepository *repositories.SegmentRepository) *SegmentController {
	return &SegmentController{
		segmentRepository: segmentRepository,
	}
}

func (controller *SegmentController) GetSegments(ctx *gin.Context) {
	segments := controller.segmentRepository.FindAll()

	utils.Success(
		ctx,
		http.StatusOK,
		"segments fetched successfully",
		segments,
	)
}