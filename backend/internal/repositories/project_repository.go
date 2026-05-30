package repositories

import (
	"context"
	"errors"
	"strconv"
	"strings"

	"github.com/dicksa-ananda/segmented-portfolio-api/internal/models"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type ProjectRepository struct {
	db *pgxpool.Pool
}

func NewProjectRepository(db *pgxpool.Pool) *ProjectRepository {
	return &ProjectRepository{
		db: db,
	}
}

func (repository *ProjectRepository) FindBySegment(ctx context.Context, segment string) ([]models.Project, error) {
	query := `
		SELECT
			p.id::text,
			p.slug,
			p.title,
			p.category,
			p.project_type,
			p.summary,
			p.description,
			p.tech_stack,
			p.live_url,
			p.github_url,
			ps.segment,
			ps.segment_title,
			ps.segment_description,
			ps.segment_highlights,
			ps.sort_order AS segment_sort_order,
			p.sort_order AS project_sort_order
		FROM project_segments ps
		JOIN projects p ON p.id = ps.project_id
		WHERE ps.segment = $1
		  AND p.is_featured = TRUE
		ORDER BY ps.sort_order ASC, p.sort_order ASC;
	`

	rows, err := repository.db.Query(ctx, query, segment)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	projects := make([]models.Project, 0)

	for rows.Next() {
		var project models.Project

		err := rows.Scan(
			&project.ID,
			&project.Slug,
			&project.Title,
			&project.Category,
			&project.ProjectType,
			&project.Summary,
			&project.Description,
			&project.TechStack,
			&project.LiveURL,
			&project.GithubURL,
			&project.Segment,
			&project.SegmentTitle,
			&project.SegmentDescription,
			&project.SegmentHighlights,
			&project.SegmentSortOrder,
			&project.ProjectSortOrder,
		)

		if err != nil {
			return nil, err
		}

		projects = append(projects, project)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return projects, nil
}

func (repository *ProjectRepository) FindAll(
	ctx context.Context,
	filter models.ProjectFilter,
	pagination models.Pagination,
) (*models.PaginatedProjects, error) {
	baseQuery := `
		FROM projects
	`

	conditions := make([]string, 0)
	args := make([]any, 0)

	if filter.Featured != nil {
		args = append(args, *filter.Featured)
		conditions = append(conditions, "is_featured = $"+strconv.Itoa(len(args)))
	}

	if strings.TrimSpace(filter.Category) != "" {
		args = append(args, filter.Category)
		conditions = append(conditions, "category = $"+strconv.Itoa(len(args)))
	}

	whereClause := ""
	if len(conditions) > 0 {
		whereClause = " WHERE " + strings.Join(conditions, " AND ")
	}

	countQuery := "SELECT COUNT(*)::int " + baseQuery + whereClause

	var total int
	if err := repository.db.QueryRow(ctx, countQuery, args...).Scan(&total); err != nil {
		return nil, err
	}

	query := `
		SELECT
			id::text,
			slug,
			title,
			category,
			project_type,
			summary,
			description,
			tech_stack,
			live_url,
			github_url,
			is_featured,
			sort_order
	` + baseQuery + whereClause + `
		ORDER BY sort_order ASC
		LIMIT $` + strconv.Itoa(len(args)+1) + `
		OFFSET $` + strconv.Itoa(len(args)+2) + `;
	`

	args = append(args, pagination.Limit, pagination.Offset)

	rows, err := repository.db.Query(ctx, query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	projects := make([]models.ProjectOverview, 0)

	for rows.Next() {
		var project models.ProjectOverview

		err := rows.Scan(
			&project.ID,
			&project.Slug,
			&project.Title,
			&project.Category,
			&project.ProjectType,
			&project.Summary,
			&project.Description,
			&project.TechStack,
			&project.LiveURL,
			&project.GithubURL,
			&project.IsFeatured,
			&project.SortOrder,
		)

		if err != nil {
			return nil, err
		}

		projects = append(projects, project)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	totalPages := 0
	if pagination.Limit > 0 {
		totalPages = (total + pagination.Limit - 1) / pagination.Limit
	}

	return &models.PaginatedProjects{
		Items:      projects,
		Total:      total,
		Page:       pagination.Page,
		Limit:      pagination.Limit,
		TotalPages: totalPages,
	}, nil
}

func (repository *ProjectRepository) FindBySlug(ctx context.Context, slug string) (*models.ProjectOverview, error) {
	query := `
		SELECT
			id::text,
			slug,
			title,
			category,
			project_type,
			summary,
			description,
			tech_stack,
			live_url,
			github_url,
			is_featured,
			sort_order
		FROM projects
		WHERE slug = $1
		LIMIT 1;
	`

	var project models.ProjectOverview

	err := repository.db.QueryRow(ctx, query, slug).Scan(
		&project.ID,
		&project.Slug,
		&project.Title,
		&project.Category,
		&project.ProjectType,
		&project.Summary,
		&project.Description,
		&project.TechStack,
		&project.LiveURL,
		&project.GithubURL,
		&project.IsFeatured,
		&project.SortOrder,
	)

	if errors.Is(err, pgx.ErrNoRows) {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return &project, nil
}