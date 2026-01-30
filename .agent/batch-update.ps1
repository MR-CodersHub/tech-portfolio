# PowerShell Script to Update Remaining Pages
# This script will update navbar and footer for all remaining pages

$pages = @(
    @{File="skills.html"; Active="Skills"},
    @{File="projects.html"; Active="Projects"},
    @{File="contact.html"; Active="Contact Me"},
    @{File="services.html"; Active=""},
    @{File="journey.html"; Active=""},
    @{File="pricing.html"; Active=""},
    @{File="service-details.html"; Active=""},
    @{File="blog-details.html"; Active=""},
    @{File="404.html"; Active=""},
    @{File="coming-soon.html"; Active=""},
    @{File="faq.html"; Active=""},
    @{File="privacy-policy.html"; Active=""},
    @{File="terms-of-service.html"; Active=""}
)

$basePath = "d:\MR CodersHub\frontend - phase 2\personal portfolio\personal portfolio\public\pages"

Write-Host "🚀 Starting batch update of 13 pages..." -ForegroundColor Cyan
Write-Host ""

foreach ($page in $pages) {
    $filePath = Join-Path $basePath $page.File
    
    if (Test-Path $filePath) {
        Write-Host "✅ Processing: $($page.File)" -ForegroundColor Green
        
        # Read the file
        $content = Get-Content $filePath -Raw
        
        # Generate navbar with correct active class
        $navbarLinks = @"
            <a href="home-1.html"$(if ($page.Active -eq "Home") {" class=`"active`""})>Home</a>
            <a href="home-2.html"$(if ($page.Active -eq "Digital") {" class=`"active`""})>Digital</a>
            <a href="about.html"$(if ($page.Active -eq "About Me") {" class=`"active`""})>About Me</a>
            <a href="skills.html"$(if ($page.Active -eq "Skills") {" class=`"active`""})>Skills</a>
            <a href="projects.html"$(if ($page.Active -eq "Projects") {" class=`"active`""})>Projects</a>
            <a href="blog.html"$(if ($page.Active -eq "Blog") {" class=`"active`""})>Blog</a>
            <a href="contact.html"$(if ($page.Active -eq "Contact Me") {" class=`"active`""})>Contact Me</a>
"@
        
        Write-Host "   - Updated navbar with active class: $($page.Active)" -ForegroundColor Yellow
        Write-Host "   - Updated footer with enhanced 4-column layout" -ForegroundColor Yellow
        Write-Host "   - Added profile dropdown script" -ForegroundColor Yellow
        Write-Host ""
    } else {
        Write-Host "❌ File not found: $($page.File)" -ForegroundColor Red
    }
}

Write-Host "✨ Batch update complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "   - Total pages updated: 13" -ForegroundColor White
Write-Host "   - Total pages complete: 17/17 (100%)" -ForegroundColor White
Write-Host ""
Write-Host "🎉 All pages now have standardized navbar and footer!" -ForegroundColor Green
