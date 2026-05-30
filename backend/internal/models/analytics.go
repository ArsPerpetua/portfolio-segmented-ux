package models

type AnalyticsEvent struct {
	EventType string         `json:"event_type"`
	Segment   *string        `json:"segment"`
	Metadata  map[string]any `json:"metadata"`
	IPAddress string         `json:"ip_address"`
	UserAgent string         `json:"user_agent"`
}

type AnalyticsSummary struct {
	Segment string `json:"segment"`
	Total   int    `json:"total"`
}