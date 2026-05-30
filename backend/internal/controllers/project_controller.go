package controllers

import (
	"net/http"
	"strconv"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/models"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
)

type ProjectController struct {
	projectRepository *repositories.ProjectRepository
}

func NewProjectController(projectRepository *repositories.ProjectRepository) *ProjectController {
	return &ProjectController{
		projectRepository: projectRepository,
	}
}

func (controller *ProjectController) GetProjects(ctx *gin.Context) {
	view := ctx.DefaultQuery("view", utils.SegmentEnterprise)

	if !utils.IsValidSegment(view) {
		utils.Error(
			ctx,
			http.StatusBadRequest,
			"invalid view parameter. "+utils.AllowedSegmentsMessage(),
		)
		return
	}

	projects, err := controller.projectRepository.FindBySegment(ctx.Request.Context(), view)
	if err != nil {
		utils.InternalServerError(ctx)
		return
	}

	utils.SuccessWithMeta(
		ctx,
		http.StatusOK,
		"projects fetched successfully",
		projects,
		gin.H{
			"view":  view,
			"count": len(projects),
		},
	)
}

func (controller *ProjectController) GetAllProjects(ctx *gin.Context) {
	filter := models.ProjectFilter{
		Category: ctx.Query("category"),
	}

	featuredQuery := ctx.Query("featured")
	if featuredQuery != "" {
		featured, err := strconv.ParseBool(featuredQuery)
		if err != nil {
			utils.Error(ctx, http.StatusBadRequest, "invalid featured parameter. allowed values: true, false")
			return
		}

		filter.Featured = &featured
	}

	page := 1
	limit := 10

	pageQuery := ctx.Query("page")
	if pageQuery != "" {
		parsedPage, err := strconv.Atoi(pageQuery)
		if err != nil || parsedPage < 1 {
			utils.Error(ctx, http.StatusBadRequest, "invalid page parameter. minimum value is 1")
			return
		}

		page = parsedPage
	}

	limitQuery := ctx.Query("limit")
	if limitQuery != "" {
		parsedLimit, err := strconv.Atoi(limitQuery)
		if err != nil || parsedLimit < 1 || parsedLimit > 50 {
			utils.Error(ctx, http.StatusBadRequest, "invalid limit parameter. allowed range is 1 to 50")
			return
		}

		limit = parsedLimit
	}

	pagination := models.Pagination{
		Page:   page,
		Limit:  limit,
		Offset: (page - 1) * limit,
	}

	result, err := controller.projectRepository.FindAll(ctx.Request.Context(), filter, pagination)
	if err != nil {
		utils.InternalServerError(ctx)
		return
	}

	meta := gin.H{
		"count":       len(result.Items),
		"total":       result.Total,
		"page":        result.Page,
		"limit":       result.Limit,
		"total_pages": result.TotalPages,
	}

	if filter.Featured != nil {
		meta["featured"] = *filter.Featured
	}

	if filter.Category != "" {
		meta["category"] = filter.Category
	}

	utils.SuccessWithMeta(
		ctx,
		http.StatusOK,
		"all projects fetched successfully",
		result.Items,
		meta,
	)
}

func (controller *ProjectController) GetProjectBySlug(ctx *gin.Context) {
	slug := ctx.Param("slug")

	project, err := controller.projectRepository.FindBySlug(ctx.Request.Context(), slug)
	if err != nil {
		utils.InternalServerError(ctx)
		return
	}

	if project == nil {
		utils.Error(ctx, http.StatusNotFound, "project not found")
		return
	}

	utils.Success(
		ctx,
		http.StatusOK,
		"project fetched successfully",
		project,
	)
}