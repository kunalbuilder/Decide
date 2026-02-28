# Decide Desktop MVP Build Plan

## Increment 1 (this commit)
- Electron + React shell
- SQLite-backed log store in main process
- Event bus broadcasting log events to renderer
- UI stubs:
  - Cmd/Ctrl+K palette popup
  - Jobs log panel
  - Connect Google Drive button (stub)
  - Connect WhatsApp button (stub)
  - Create Workflow form (stub)

### Run
```bash
npm install
npm run dev
```

### Validate
```bash
npm run typecheck
```

## Increment 2
- fileWatcher with stable-file detection (temp file filtering, min size, stable checks)
- unit tests for stability algorithm and rename handling

## Increment 3
- Google Drive OAuth + resumable upload adapter
- mock provider mode + harness test script

## Increment 4
- WhatsApp Playwright automation module
- fallback deep-link mode + harness test script

## Increment 5
- workflow engine + serialized job queue (maxConcurrentJobs=1)
- UI to arm/disarm watches and retry failed jobs
