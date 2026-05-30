package repositories

import "github.com/dicksa-ananda/segmented-portfolio-api/internal/models"

type ProfileRepository struct{}

func NewProfileRepository() *ProfileRepository {
	return &ProfileRepository{}
}

func (repository *ProfileRepository) GetProfile() models.Profile {
	return models.Profile{
		FullName:      "Dicksa Ananda Cristian Tue",
		ShortName:     "Dicksa Ananda",
		Headline:      "Full-Stack Engineer & AI Specialist.",
		Role:          "Full-Stack Engineer | AI-Powered Web Developer",
		Summary:       "Full-Stack Engineer with hands-on experience building scalable web applications, REST APIs, AI-powered systems, and business workflow platforms for government and private clients.",
		AcademicProof: "Top 1 Computer Science Graduate (S.Kom), Cumlaude, GPA: 3.94/4.00",
		Email:         "diksaanandaa@gmail.com",
		Phone:         "+6281337586563",
		LinkedIn:      "https://linkedin.com/in/dicksa",
		GitHub:        "https://github.com/ArsPerpetua",
		Location:      "Indonesia",
		Availability:  "Available for remote collaboration and selected opportunities",
	}
}