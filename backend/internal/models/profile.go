package models

type Profile struct {
	FullName            string `json:"full_name"`
	ShortName           string `json:"short_name"`
	Headline            string `json:"headline"`
	Role                string `json:"role"`
	Summary             string `json:"summary"`
	AcademicProof       string `json:"academic_proof"`
	Email               string `json:"email"`
	Phone               string `json:"phone"`
	LinkedIn            string `json:"linkedin"`
	GitHub              string `json:"github"`
	Location            string `json:"location"`
	Availability        string `json:"availability"`
}