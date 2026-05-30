package models

type Education struct {
	ID          string   `json:"id"`
	Institution string   `json:"institution"`
	Degree      string   `json:"degree"`
	Field       string   `json:"field"`
	Period      string   `json:"period"`
	GPA         string   `json:"gpa"`
	Highlights  []string `json:"highlights"`
	SortOrder   int      `json:"sort_order"`
}