---
title: Segmented Portfolio API
emoji: 🚀
colorFrom: cyan
colorTo: emerald
sdk: docker
app_port: 7860
---

# Segmented Portfolio API

REST API backend untuk Dynamic Segmented Portfolio milik Dicksa Ananda Cristian Tue.

Backend ini dibangun menggunakan:

- Golang
- Gin Framework
- PostgreSQL
- Clean Architecture style
- Goroutines + Channels untuk non-blocking analytics

## Features

- Health check API
- Profile API
- Segment options API
- Featured projects by audience segment
- All projects with filtering and pagination
- Project detail by slug
- Experiences API
- Achievements API
- Skills API
- Education API
- Non-blocking analytics tracking using Goroutine + Channel
- Analytics summary endpoint
- CORS configuration
- Graceful shutdown

## Project Structure

```txt
backend/
  cmd/
    api/
      main.go
  internal/
    config/
      config.go
    controllers/
    database/
      migrations/
    middlewares/
    models/
    repositories/
    routes/
    services/
    utils/
  .env.example
  .gitignore
  go.mod
  go.sum
```

## Environment Variables

Create .env file based on .env.example.

APP_PORT=8080
PORT=7860
DATABASE_URL=postgres://postgres:your_password@localhost:5432/segmented_portfolio?sslmode=disable
CORS_ALLOWED_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
Installation
go mod tidy
Run Development Server
go run cmd/api/main.go

Server will run on:

http://localhost:8080
Health Check
GET /health

Example response:

{
  "status": "success",
  "message": "service healthy",
  "data": {
    "database": "connected",
    "service": "segmented-portfolio-api"
  }
}
API Endpoints
Profile
GET /api/v1/profile

Returns personal profile data such as name, headline, summary, contact, LinkedIn, and GitHub.

Segments
GET /api/v1/segments

Returns available portfolio audience segments:

enterprise
startup
freelance
Featured Projects by Segment
GET /api/v1/projects?view=enterprise
GET /api/v1/projects?view=startup
GET /api/v1/projects?view=freelance

Returns featured projects with dynamic narrative based on selected audience segment.

All Projects
GET /api/v1/projects/all

Supports filters:

GET /api/v1/projects/all?featured=true
GET /api/v1/projects/all?featured=false
GET /api/v1/projects/all?category=Gov-Tech

Supports pagination:

GET /api/v1/projects/all?page=1&limit=6

Combined example:

GET /api/v1/projects/all?featured=false&page=1&limit=3
Project Detail
GET /api/v1/projects/:slug

Example:

GET /api/v1/projects/docuflow
GET /api/v1/projects/ecovision
Experiences
GET /api/v1/experiences

Returns professional experience data.

Achievements
GET /api/v1/achievements

Returns achievements such as academic ranking, research presentation, and coding camp distinction.

Skills
GET /api/v1/skills

Returns grouped skills:

Frontend
Backend
Database
Deployment & Infrastructure
AI-Assisted Development
Software Engineering
Education
GET /api/v1/education

Returns education data.

Track Analytics Event
POST /api/v1/analytics

Request body:

{
  "event_type": "segment_click",
  "segment": "enterprise",
  "metadata": {
    "source": "floating_switcher"
  }
}

Example response:

{
  "status": "success",
  "message": "analytics event queued",
  "data": {
    "queued": true
  }
}

This endpoint uses Goroutine + Channel to queue analytics events without blocking frontend response.

Analytics Summary
GET /api/v1/analytics/summary

Returns total segment clicks grouped by segment.

Example response:

{
  "status": "success",
  "message": "analytics summary fetched successfully",
  "data": [
    {
      "segment": "enterprise",
      "total": 10
    },
    {
      "segment": "startup",
      "total": 7
    },
    {
      "segment": "freelance",
      "total": 4
    }
  ]
}
Database Setup

Create database:

CREATE DATABASE segmented_portfolio;

Enable UUID extension:

CREATE EXTENSION IF NOT EXISTS pgcrypto;

Run migrations manually:

psql -U postgres -d segmented_portfolio -f internal/database/migrations/001_create_portfolio_tables.sql
psql -U postgres -d segmented_portfolio -f internal/database/migrations/002_seed_projects.sql
psql -U postgres -d segmented_portfolio -f internal/database/migrations/003_add_project_links.sql
psql -U postgres -d segmented_portfolio -f internal/database/migrations/004_update_project_links.sql
psql -U postgres -d segmented_portfolio -f internal/database/migrations/005_seed_additional_projects.sql
Development Test
go test ./...
Main API Base URL
http://localhost:8080/api/v1
Frontend Integration Target

Frontend React/Vite can consume this API from:

http://localhost:8080

Allowed frontend origins are configured through:

CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

## 2. Test backend tetap aman

```powershell
go test ./...

Lalu:

go run cmd/api/main.go

Buka:

http://localhost:8080/health