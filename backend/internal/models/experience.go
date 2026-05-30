package models

type Experience struct {
	ID           string   `json:"id"`
	Role         string   `json:"role"`
	Organization string   `json:"organization"`
	Period       string   `json:"period"`
	Description  string   `json:"description"`
	Highlights   []string `json:"highlights"`
	SortOrder    int      `json:"sort_order"`
}