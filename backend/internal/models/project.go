package models

type Project struct {
	ID                 string   `json:"id"`
	Slug               string   `json:"slug"`
	Title              string   `json:"title"`
	Category           string   `json:"category"`
	ProjectType        string   `json:"project_type"`
	Summary            string   `json:"summary"`
	Description        string   `json:"description"`
	TechStack          []string `json:"tech_stack"`
	LiveURL            *string  `json:"live_url"`
	GithubURL          *string  `json:"github_url"`
	Segment            string   `json:"segment"`
	SegmentTitle       string   `json:"segment_title"`
	SegmentDescription string   `json:"segment_description"`
	SegmentHighlights  []string `json:"segment_highlights"`
	SegmentSortOrder   int      `json:"segment_sort_order"`
	ProjectSortOrder   int      `json:"project_sort_order"`
}

type ProjectOverview struct {
	ID          string   `json:"id"`
	Slug        string   `json:"slug"`
	Title       string   `json:"title"`
	Category    string   `json:"category"`
	ProjectType string   `json:"project_type"`
	Summary     string   `json:"summary"`
	Description string   `json:"description"`
	TechStack   []string `json:"tech_stack"`
	LiveURL     *string  `json:"live_url"`
	GithubURL   *string  `json:"github_url"`
	IsFeatured  bool     `json:"is_featured"`
	SortOrder   int      `json:"sort_order"`
}

type ProjectFilter struct {
	Featured *bool
	Category string
}

type Pagination struct {
	Page   int
	Limit  int
	Offset int
}

type PaginatedProjects struct {
	Items      []ProjectOverview `json:"items"`
	Total      int               `json:"total"`
	Page       int               `json:"page"`
	Limit      int               `json:"limit"`
	TotalPages int               `json:"total_pages"`
}