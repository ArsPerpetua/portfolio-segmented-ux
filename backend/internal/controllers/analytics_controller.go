package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/models"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/services"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type AnalyticsController struct {
	analyticsService *services.AnalyticsService
}

type TrackAnalyticsRequest struct {
	EventType string         `json:"event_type" binding:"required"`
	Segment   *string        `json:"segment"`
	Metadata  map[string]any `json:"metadata"`
}

func NewAnalyticsController(analyticsService *services.AnalyticsService) *AnalyticsController {
	return &AnalyticsController{
		analyticsService: analyticsService,
	}
}

func (controller *AnalyticsController) Track(ctx *gin.Context) {
	var request TrackAnalyticsRequest

	if err := ctx.ShouldBindJSON(&request); err != nil {
		utils.Error(ctx, http.StatusBadRequest, "invalid request body")
		return
	}

	if request.Segment != nil && !utils.IsValidSegment(*request.Segment) {
		utils.Error(
			ctx,
			http.StatusBadRequest,
			"invalid segment. "+utils.AllowedSegmentsMessage(),
		)
		return
	}

	metadata := request.Metadata
	if metadata == nil {
		metadata = map[string]any{}
	}

	accepted := controller.analyticsService.Track(models.AnalyticsEvent{
		EventType: request.EventType,
		Segment:   request.Segment,
		Metadata:  metadata,
		IPAddress: ctx.ClientIP(),
		UserAgent: ctx.Request.UserAgent(),
	})

	if !accepted {
		utils.Error(ctx, http.StatusServiceUnavailable, "analytics queue is full")
		return
	}

	utils.Success(
		ctx,
		http.StatusAccepted,
		"analytics event queued",
		gin.H{
			"queued": true,
		},
	)
}

func (controller *AnalyticsController) GetSummary(ctx *gin.Context) {
	summary, err := controller.analyticsService.GetSegmentClickSummary(ctx.Request.Context())
	if err != nil {
		utils.InternalServerError(ctx)
		return
	}

	utils.Success(
		ctx,
		http.StatusOK,
		"analytics summary fetched successfully",
		summary,
	)
}