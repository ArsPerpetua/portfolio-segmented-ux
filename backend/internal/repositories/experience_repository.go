package repositories

import "github.com/dicksa-ananda/segmented-portfolio-api/internal/models"

type ExperienceRepository struct{}

func NewExperienceRepository() *ExperienceRepository {
	return &ExperienceRepository{}
}

func (repository *ExperienceRepository) FindAll() []models.Experience {
	return []models.Experience{
		{
			ID:           "freelance-fullstack-ai-engineer",
			Role:         "Freelance Full-Stack Developer & AI Engineer",
			Organization: "Independent / Client Projects",
			Period:       "Jan 2024 - Present",
			Description:  "Developing production-ready web applications, REST APIs, workflow automation platforms, and AI-powered systems for government and private clients.",
			Highlights: []string{
				"Built scalable REST APIs, authentication systems, and workflow automation platforms.",
				"Designed and optimized relational databases using PostgreSQL and MySQL.",
				"Developed AI-powered applications and decision support systems for real-world use cases.",
				"Integrated deployment workflows using Railway and Vercel.",
				"Built modern frontend systems using React.js and TypeScript.",
			},
			SortOrder: 1,
		},
		{
			ID:           "pranata-komputer-kemenkum-ntb",
			Role:         "Pranata Komputer - Maganghub Program",
			Organization: "Kemenkum NTB",
			Period:       "Dec 2025 - Jun 2026",
			Description:  "Selected for a government internship program focused on improving internal digital workflows and IT issue reporting efficiency.",
			Highlights: []string{
				"Developed IT Ticketing System to improve internal issue tracking and response efficiency.",
				"Automated reporting workflows to reduce manual processes.",
				"Translated user requirements into scalable and functional system features.",
			},
			SortOrder: 2,
		},
		{
			ID:           "project-manager-ai-developer-dbs-coding-camp",
			Role:         "Project Manager & AI Developer",
			Organization: "DBS Coding Camp",
			Period:       "Feb 2025 - Jul 2025",
			Description:  "Led development of an AI-based application in a cross-functional team and integrated machine learning models into a production-ready system.",
			Highlights: []string{
				"Led development of an AI-based application in a cross-functional team.",
				"Built and integrated machine learning models into a production-ready system.",
				"Managed project workflow and team coordination.",
				"Achieved Top 10% Distinction among 3,000+ participants.",
			},
			SortOrder: 3,
		},
	}
}