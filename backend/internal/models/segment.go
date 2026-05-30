package models

type SegmentOption struct {
	ID          string `json:"id"`
	Label       string `json:"label"`
	ShortLabel  string `json:"short_label"`
	Headline    string `json:"headline"`
	Description string `json:"description"`
}