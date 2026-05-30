package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Success(ctx *gin.Context, statusCode int, message string, data any) {
	ctx.JSON(statusCode, gin.H{
		"status":  "success",
		"message": message,
		"data":    data,
	})
}

func SuccessWithMeta(ctx *gin.Context, statusCode int, message string, data any, meta gin.H) {
	ctx.JSON(statusCode, gin.H{
		"status":  "success",
		"message": message,
		"data":    data,
		"meta":    meta,
	})
}

func Error(ctx *gin.Context, statusCode int, message string) {
	ctx.JSON(statusCode, gin.H{
		"status":  "error",
		"message": message,
	})
}

func InternalServerError(ctx *gin.Context) {
	Error(ctx, http.StatusInternalServerError, "internal server error")
}