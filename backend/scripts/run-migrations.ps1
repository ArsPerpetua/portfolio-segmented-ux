param (
    [string]$DatabaseName = "segmented_portfolio",
    [string]$DatabaseUser = "postgres"
)

Write-Host "Running database migrations..." -ForegroundColor Cyan

$migrationPath = "internal/database/migrations"

$migrations = Get-ChildItem -Path $migrationPath -Filter "*.sql" | Sort-Object Name

if ($migrations.Count -eq 0) {
    Write-Host "No migration files found." -ForegroundColor Yellow
    exit 0
}

foreach ($migration in $migrations) {
    Write-Host "Running migration: $($migration.Name)" -ForegroundColor Green

    psql -U $DatabaseUser -d $DatabaseName -f $migration.FullName

    if ($LASTEXITCODE -ne 0) {
        Write-Host "Migration failed: $($migration.Name)" -ForegroundColor Red
        exit 1
    }
}

Write-Host "All migrations completed successfully." -ForegroundColor Cyan