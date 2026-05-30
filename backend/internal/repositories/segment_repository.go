package repositories

import (
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/models"
	"github.com/dicksa-ananda/segmented-portfolio-api/internal/utils"
)

type SegmentRepository struct{}

func NewSegmentRepository() *SegmentRepository {
	return &SegmentRepository{}
}

func (repository *SegmentRepository) FindAll() []models.SegmentOption {
	return []models.SegmentOption{
		{
			ID:         utils.SegmentEnterprise,
			Label:      "For Enterprise",
			ShortLabel: "Enterprise",
			Headline:   "Enterprise-grade systems for reliable digital operations.",
			Description: "Designed for organizations that need scalable architecture, workflow automation, internal systems, and measurable operational impact.",
		},
		{
			ID:         utils.SegmentStartup,
			Label:      "For Startups",
			ShortLabel: "Startups",
			Headline:   "Fast-moving product engineering for ambitious teams.",
			Description: "Built for founders and product teams that need MVP development, rapid iteration, AI integration, and scalable foundations from day one.",
		},
		{
			ID:         utils.SegmentFreelance,
			Label:      "For Freelance",
			ShortLabel: "Freelance",
			Headline:   "Modern web experiences for brands, teams, and operators.",
			Description: "Focused on clean interfaces, custom web applications, landing pages, automation tools, and polished delivery for client-facing outcomes.",
		},
	}
}