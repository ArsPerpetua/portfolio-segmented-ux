package controllers

import (
	"net/http"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

type HealthController struct {
	db *pgxpool.Pool
}

func NewHealthController(db *pgxpool.Pool) *HealthController {
	return &HealthController{
		db: db,
	}
}

func (controller *HealthController) Check(ctx *gin.Context) {
	if err := controller.db.Ping(ctx.Request.Context()); err != nil {
		utils.Error(ctx, http.StatusServiceUnavailable, "database disconnected")
		return
	}

	utils.Success(
		ctx,
		http.StatusOK,
		"service healthy",
		gin.H{
			"service":  "segmented-portfolio-api",
			"database": "connected",
		},
	)
}