package repositories

import "github.com/dicksa-ananda/segmented-portfolio-api/internal/models"

type SkillRepository struct{}

func NewSkillRepository() *SkillRepository {
	return &SkillRepository{}
}

func (repository *SkillRepository) FindAll() []models.SkillGroup {
	return []models.SkillGroup{
		{
			ID:       "frontend",
			Category: "Frontend",
			Skills: []string{
				"React.js",
				"TypeScript",
				"JavaScript",
				"Tailwind CSS",
				"HTML",
				"CSS",
			},
			SortOrder: 1,
		},
		{
			ID:       "backend",
			Category: "Backend",
			Skills: []string{
				"Python",
				"Django",
				"FastAPI",
				"Express.js",
				"PHP",
				"Laravel",
				"CodeIgniter",
				"REST API",
			},
			SortOrder: 2,
		},
		{
			ID:       "database",
			Category: "Database",
			Skills: []string{
				"PostgreSQL",
				"MySQL",
				"Database Design",
			},
			SortOrder: 3,
		},
		{
			ID:       "deployment-infrastructure",
			Category: "Deployment & Infrastructure",
			Skills: []string{
				"Railway",
				"Vercel",
				"GitHub",
				"Docker Basic",
			},
			SortOrder: 4,
		},
		{
			ID:       "ai-assisted-development",
			Category: "AI-Assisted Development",
			Skills: []string{
				"ChatGPT",
				"Claude",
				"Cursor AI",
				"GitHub Copilot",
			},
			SortOrder: 5,
		},
		{
			ID:       "software-engineering",
			Category: "Software Engineering",
			Skills: []string{
				"Full-Stack Development",
				"API Integration",
				"System Architecture",
				"SDLC",
				"Workflow Automation",
			},
			SortOrder: 6,
		},
	}
}