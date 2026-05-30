package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/config"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/controllers"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/database"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/middlewares"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/routes"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/services"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found. Using system environment variables.")
	}

	appConfig := config.Load()

	appPort := os.Getenv("PORT")
	if appPort == "" {
		appPort = appConfig.AppPort
	}

	if appPort == "" {
		appPort = "8080"
	}

	appCtx, stopApp := context.WithCancel(context.Background())
	defer stopApp()

	dbPool := database.NewPostgresPool(appCtx, appConfig.DatabaseURL)
	defer dbPool.Close()

	healthController := controllers.NewHealthController(dbPool)

	segmentRepository := repositories.NewSegmentRepository()
	segmentController := controllers.NewSegmentController(segmentRepository)

	profileRepository := repositories.NewProfileRepository()
	profileController := controllers.NewProfileController(profileRepository)

	experienceRepository := repositories.NewExperienceRepository()
	experienceController := controllers.NewExperienceController(experienceRepository)

	achievementRepository := repositories.NewAchievementRepository()
	achievementController := controllers.NewAchievementController(achievementRepository)

	skillRepository := repositories.NewSkillRepository()
	skillController := controllers.NewSkillController(skillRepository)

	educationRepository := repositories.NewEducationRepository()
	educationController := controllers.NewEducationController(educationRepository)

	projectRepository := repositories.NewProjectRepository(dbPool)
	projectController := controllers.NewProjectController(projectRepository)

	analyticsRepository := repositories.NewAnalyticsRepository(dbPool)
	analyticsService := services.NewAnalyticsService(analyticsRepository)
	analyticsService.StartWorker(appCtx)
	analyticsController := controllers.NewAnalyticsController(analyticsService)

	router := gin.New()
	router.Use(gin.Recovery())
	router.Use(middlewares.RequestLogger())
	router.Use(middlewares.CORSMiddleware())

	routes.RegisterHealthRoutes(router, healthController)
	routes.RegisterSegmentRoutes(router, segmentController)
	routes.RegisterProfileRoutes(router, profileController)
	routes.RegisterExperienceRoutes(router, experienceController)
	routes.RegisterAchievementRoutes(router, achievementController)
	routes.RegisterSkillRoutes(router, skillController)
	routes.RegisterEducationRoutes(router, educationController)
	routes.RegisterProjectRoutes(router, projectController)
	routes.RegisterAnalyticsRoutes(router, analyticsController)

	server := &http.Server{
		Addr:         ":" + appPort,
		Handler:      router,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	go func() {
		log.Printf("Server running on port %s", appPort)

		if err := server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("failed to start server: %v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, syscall.SIGTERM)

	<-quit
	log.Println("Shutdown signal received")

	stopApp()

	shutdownCtx, cancelShutdown := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancelShutdown()

	if err := server.Shutdown(shutdownCtx); err != nil {
		log.Fatalf("server forced to shutdown: %v", err)
	}

	log.Println("Server exited gracefully")
}