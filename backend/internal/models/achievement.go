package models

type Achievement struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Year        string `json:"year"`
	Category    string `json:"category"`
	SortOrder   int    `json:"sort_order"`
}