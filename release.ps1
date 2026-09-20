<#
  release.ps1 — stages, commits and pushes everything in the current repo folder.
  Usage (from inside event-overview/):
      .\release.ps1 "commit message here"
  Cloudflare Workers Builds then picks up the push and deploys automatically —
  no need to run wrangler deploy separately.
#>

param(
    [Parameter(Mandatory = $true)]
    [string]$Message
)

$ErrorActionPreference = "Stop"

git add -A

$staged = git diff --cached --name-only
if (-not $staged) {
    Write-Host "Nothing to commit - working tree already matches the last commit." -ForegroundColor Yellow
    exit 0
}

git commit -m $Message
git push

Write-Host "Done. Pushed to origin - Cloudflare Workers Builds will deploy it automatically." -ForegroundColor Green
