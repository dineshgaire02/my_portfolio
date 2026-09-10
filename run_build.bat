@echo off
set "PATH=%~dp0..\tools\nodejs;%PATH%"
echo Building Er. Dinesh Gaire Portfolio for production...
npm run build
echo.
echo Build finished! Production files are ready inside the 'dist' directory.
pause
