# Git och Deployment - Lösning för specialtecken i sökvägar

## Problem
PowerShell har problem med specialtecken (t.ex. "ö" i "Torbjörn") när man försöker köra git-kommandon med absoluta sökvägar.

## Permanent lösning: Använd $PSScriptRoot

**Alla PowerShell-scripts i detta projekt använder `$PSScriptRoot` istället för hårdkodade sökvägar.**

### Exempel från projektet:
- `deploy-google-ads.ps1` - använder `cd $PSScriptRoot`
- `commit-changes.ps1` - använder `cd $PSScriptRoot`

### Varför fungerar det?
- `$PSScriptRoot` är en automatisk PowerShell-variabel
- Den innehåller katalogen där scriptet ligger
- Den hanterar specialtecken korrekt
- Scriptet fungerar oavsett var det körs från

## Så här kör du git-kommandon

### Metod 1: Kör scriptet direkt
```powershell
# Öppna PowerShell i flocken-website mappen
# Högerklicka i mappen → "Open in Terminal" eller "Open PowerShell window here"
.\commit-changes.ps1
```

### Metod 2: Använd git -C med $PSScriptRoot
```powershell
# Om du är i scriptets katalog
$repoPath = $PSScriptRoot
git -C $repoPath add "app/file.tsx"
git -C $repoPath commit -m "Message"
git -C $repoPath push origin main
```

### Metod 3: Använd git från rätt katalog
```powershell
# Navigera först, sedan kör git
cd "C:\Users\Torbjörn\Desktop\flocken-website"
git add "app/file.tsx"
git commit -m "Message"
git push origin main
```

## Om användarnamnet ändras

Om Windows-användarnamnet ändras från "Torbjörn" till "torbjorn" (eller annat):
- Scripts med `$PSScriptRoot` fungerar fortfarande
- Inga ändringar behövs i scripts
- Endast sökvägen till projektet ändras, men scripts hittar rätt katalog automatiskt

## Dokumentation
Se `GIT_COMMANDS.md` för detaljerad dokumentation om git-workflow.

