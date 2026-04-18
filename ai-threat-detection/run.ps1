# PowerShell script to run AI Threat Detection Backend

# Check if Python is installed
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Python is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

Write-Host "🔐 AI Threat Detection Engine" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Check .env exists
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  .env file not found. Please create one first." -ForegroundColor Yellow
    exit 1
}

# Check requirements
Write-Host "`n📦 Checking dependencies..." -ForegroundColor Green
$requirements = @("fastapi", "pymongo", "uvicorn")
foreach ($req in $requirements) {
    $installed = python -c "import $req" 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Installing $req..." -ForegroundColor Yellow
        pip install $req
    }
}

Write-Host "`n🚀 Starting Backend API..." -ForegroundColor Green
Write-Host "API will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host "Swagger Docs at: http://localhost:8000/docs`n" -ForegroundColor Cyan

# Run the application
python -m backend.main

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ Failed to start the backend" -ForegroundColor Red
    exit 1
}
