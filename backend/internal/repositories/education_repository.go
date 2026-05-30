package repositories

import "github.com/dicksa-ananda/segmented-portfolio-api/internal/models"

type EducationRepository struct{}

func NewEducationRepository() *EducationRepository {
	return &EducationRepository{}
}

func (repository *EducationRepository) FindAll() []models.Education {
	return []models.Education{
		{
			ID:          "universitas-bumigora-computer-science",
			Institution: "Universitas Bumigora",
			Degree:      "Bachelor of Computer Science",
			Field:       "Computer Science",
			Period:      "2021 - 2025",
			GPA:         "3.94 / 4.00",
			Highlights: []string{
				"Graduated as Top 1 Computer Science student.",
				"Earned Bachelor of Computer Science degree (S.Kom).",
				"Focused on software engineering, AI-powered systems, and scalable web applications.",
			},
			SortOrder: 1,
		},
	}
}