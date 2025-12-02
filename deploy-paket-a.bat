@echo off
echo ========================================
echo   Implementerar Paket A (Source Serif 4 + Public Sans)
echo ========================================
echo.

cd /d "%~dp0"

git add .
git commit -m "Implement Paket A: Source Serif 4 (headings) + Public Sans (body)"
git push

echo.
echo ========================================
echo   KLART! Vercel deployer nu (2-3 min)
echo   
echo   Testa sedan: https://flocken-website.vercel.app
echo ========================================
echo.
pause

