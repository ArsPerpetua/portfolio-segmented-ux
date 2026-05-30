package config

import (
	"os"
	"strings"
)

type Config struct {
	AppPort            string
	DatabaseURL        string
	CorsAllowedOrigins []string
}

func Load() Config {
	return Config{
		AppPort:            getEnv("APP_PORT", "8080"),
		DatabaseURL:        getEnv("DATABASE_URL", ""),
		CorsAllowedOrigins: getEnvAsSlice("CORS_ALLOWED_ORIGINS", []string{
			"http://localhost:5173",
			"http://127.0.0.1:5173",
		}),
	}
}

func getEnv(key string, fallback string) string {
	value := strings.TrimSpace(os.Getenv(key))

	if value == "" {
		return fallback
	}

	return value
}

func getEnvAsSlice(key string, fallback []string) []string {
	value := strings.TrimSpace(os.Getenv(key))

	if value == "" {
		return fallback
	}

	values := strings.Split(value, ",")
	result := make([]string, 0, len(values))

	for _, item := range values {
		trimmedItem := strings.TrimSpace(item)

		if trimmedItem != "" {
			result = append(result, trimmedItem)
		}
	}

	return result
}