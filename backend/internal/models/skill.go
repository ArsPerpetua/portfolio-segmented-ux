package models

type SkillGroup struct {
	ID        string   `json:"id"`
	Category  string   `json:"category"`
	Skills    []string `json:"skills"`
	SortOrder int      `json:"sort_order"`
}