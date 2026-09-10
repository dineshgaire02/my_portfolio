@echo off
title Er. Dinesh Gaire Portfolio
cd /d "%~dp0"
set "PATH=%~dp0..\tools\nodejs;%PATH%"

echo =========================================================
echo    Er. Dinesh Gaire - Professional Portfolio Website
echo =========================================================
echo.
echo Starting Production Website locally at http://localhost:5000 ...
echo Press Ctrl+C anytime to stop.
echo.

start "" "http://localhost:5000"
call npm run preview -- --port 5000 --host 0.0.0.0
pause
