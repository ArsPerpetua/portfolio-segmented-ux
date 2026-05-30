package repositories

import (
	"context"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/models"
	"github.com/jackc/pgx/v5/pgxpool"
)

type AnalyticsRepository struct {
	db *pgxpool.Pool
}

func NewAnalyticsRepository(db *pgxpool.Pool) *AnalyticsRepository {
	return &AnalyticsRepository{
		db: db,
	}
}

func (repository *AnalyticsRepository) Create(ctx context.Context, event models.AnalyticsEvent) error {
	query := `
		INSERT INTO analytics_events (
			event_type,
			segment,
			metadata,
			ip_address,
			user_agent
		)
		VALUES ($1, $2, $3, $4, $5);
	`

	_, err := repository.db.Exec(
		ctx,
		query,
		event.EventType,
		event.Segment,
		event.Metadata,
		event.IPAddress,
		event.UserAgent,
	)

	return err
}

func (repository *AnalyticsRepository) GetSegmentClickSummary(ctx context.Context) ([]models.AnalyticsSummary, error) {
	query := `
		SELECT
			segment,
			COUNT(*)::int AS total
		FROM analytics_events
		WHERE event_type = 'segment_click'
		  AND segment IS NOT NULL
		GROUP BY segment
		ORDER BY total DESC;
	`

	rows, err := repository.db.Query(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	summary := make([]models.AnalyticsSummary, 0)

	for rows.Next() {
		var item models.AnalyticsSummary

		if err := rows.Scan(&item.Segment, &item.Total); err != nil {
			return nil, err
		}

		summary = append(summary, item)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return summary, nil
}