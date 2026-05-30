package services

import (
	"context"
	"log"
	"time"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/models"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/repositories"
)

type AnalyticsService struct {
	repository *repositories.AnalyticsRepository
	events     chan models.AnalyticsEvent
}

func NewAnalyticsService(repository *repositories.AnalyticsRepository) *AnalyticsService {
	return &AnalyticsService{
		repository: repository,
		events:     make(chan models.AnalyticsEvent, 100),
	}
}

func (service *AnalyticsService) StartWorker(ctx context.Context) {
	go func() {
		log.Println("Analytics worker started")

		for {
			select {
			case <-ctx.Done():
				log.Println("Analytics worker stopped")
				return

			case event := <-service.events:
				writeCtx, cancel := context.WithTimeout(context.Background(), 3*time.Second)

				if err := service.repository.Create(writeCtx, event); err != nil {
					log.Printf("failed to write analytics event: %v", err)
				}

				cancel()
			}
		}
	}()
}

func (service *AnalyticsService) Track(event models.AnalyticsEvent) bool {
	select {
	case service.events <- event:
		return true
	default:
		return false
	}
}

func (service *AnalyticsService) GetSegmentClickSummary(ctx context.Context) ([]models.AnalyticsSummary, error) {
	return service.repository.GetSegmentClickSummary(ctx)
}