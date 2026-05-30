package repositories

import "github.com/dicksa-ananda/segmented-portfolio-api/internal/models"

type AchievementRepository struct{}

func NewAchievementRepository() *AchievementRepository {
	return &AchievementRepository{}
}

func (repository *AchievementRepository) FindAll() []models.Achievement {
	return []models.Achievement{
		{
			ID:          "best-graduate-computer-science",
			Title:       "Best Graduate - Rank 1 Computer Science",
			Description: "Graduated as the top Computer Science student with GPA 3.94 / 4.00.",
			Year:        "2025",
			Category:    "Academic",
			SortOrder:   1,
		},
		{
			ID:          "international-research-presenter-icoris-2025",
			Title:       "International Research Presenter - ICORIS 2025",
			Description: "Presented research at ICORIS 2025 as part of international academic contribution.",
			Year:        "2025",
			Category:    "Research",
			SortOrder:   2,
		},
		{
			ID:          "top-10-dbs-coding-camp",
			Title:       "Top 10% Graduate - DBS Coding Camp",
			Description: "Achieved Top 10% distinction among 3,000+ participants.",
			Year:        "2025",
			Category:    "Program Distinction",
			SortOrder:   3,
		},
	}
}