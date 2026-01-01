# Git Commands Guide

## Problem med specialtecken i sökvägar

När PowerShell kör git-kommandon från en katalog med specialtecken (t.ex. "ö" i "Torbjörn") kan det uppstå problem med sökvägshantering.

## Lösning: Använd $PSScriptRoot

**Alltid använd `$PSScriptRoot` i PowerShell-scripts istället för hårdkodade sökvägar.**

### Exempel:

```powershell
# ❌ FEL - hårdkodad sökväg med specialtecken
Set-Location "C:\Users\Torbjörn\Desktop\flocken-website"

# ✅ RÄTT - använd $PSScriptRoot
cd $PSScriptRoot
```

### Varför fungerar det?

- `$PSScriptRoot` är en automatisk PowerShell-variabel som innehåller katalogen där scriptet ligger
- Den hanterar automatiskt specialtecken korrekt
- Scriptet fungerar oavsett var användaren kör det från
- Fungerar även om användarnamnet ändras

## Standard git workflow

```powershell
# 1. Navigera till repo (om scriptet är i repo root)
cd $PSScriptRoot

# 2. Lägg till filer
git add "app/(legal)/anvandarvillkor/page.tsx"
git add "components/shared/Footer.tsx"

# 3. Commit
git commit -m "Beskrivande commit-meddelande"

# 4. Push (deployar automatiskt via Vercel)
git push origin main
```

## Skapa nya git-scripts

När du skapar nya PowerShell-scripts för git-operationer:

1. Placera scriptet i repo-roten (`flocken-website/`)
2. Använd alltid `cd $PSScriptRoot` istället för hårdkodade sökvägar
3. Följ mönstret i `deploy-google-ads.ps1` eller `commit-changes.ps1`

### Template:

```powershell
# Script description
$ErrorActionPreference = "Stop"

# Navigate to repo root
cd $PSScriptRoot

# Git commands here
git add "path/to/file"
git commit -m "Commit message"
git push origin main
```

## Alternativ: Använd git -C

Om du måste använda absoluta sökvägar, använd `git -C`:

```powershell
# Använd git -C med $PSScriptRoot
git -C $PSScriptRoot add "app/file.tsx"
git -C $PSScriptRoot commit -m "Message"
git -C $PSScriptRoot push origin main
```

## Referenser

- Se `deploy-google-ads.ps1` för exempel
- Se `commit-changes.ps1` för komplett exempel

