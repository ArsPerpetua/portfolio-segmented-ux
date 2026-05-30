package utils

const (
	SegmentEnterprise = "enterprise"
	SegmentStartup    = "startup"
	SegmentFreelance  = "freelance"
)

func IsValidSegment(segment string) bool {
	allowedSegments := map[string]bool{
		SegmentEnterprise: true,
		SegmentStartup:    true,
		SegmentFreelance:  true,
	}

	return allowedSegments[segment]
}

func AllowedSegmentsMessage() string {
	return "allowed values: enterprise, startup, freelance"
}