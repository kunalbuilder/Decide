import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { APP_EVENTS, eventBus } from './eventBus';
import { addLog, initDb, listLogs } from './db/sqlite';
import type { JobLog } from '../shared/types';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 780,
    minWidth: 1000,
    minHeight: 680,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const rendererUrl = process.env.ELECTRON_RENDERER_URL;

  if (rendererUrl) {
    void mainWindow.loadURL(rendererUrl);
  } else {
    void mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(() => {
  initDb();
  addLog('Decide app started.');

  ipcMain.handle('logs:list', () => listLogs());
  ipcMain.handle('logs:add', (_event: unknown, message: string) => {
    const log = addLog(message);
    eventBus.emit(APP_EVENTS.LOG_CREATED, log);
    return log;
  });

  ipcMain.handle('integrations:connect-google-drive', () => {
    const log = addLog('Google Drive connect clicked (stub).', 'warn');
    eventBus.emit(APP_EVENTS.LOG_CREATED, log);
    return { ok: true };
  });

  ipcMain.handle('integrations:connect-whatsapp', () => {
    const log = addLog('WhatsApp connect clicked (stub).', 'warn');
    eventBus.emit(APP_EVENTS.LOG_CREATED, log);
    return { ok: true };
  });

  ipcMain.handle('workflow:create', (_event: unknown, payload: Record<string, string>) => {
    const log = addLog(`Workflow requested (stub): ${JSON.stringify(payload)}`);
    eventBus.emit(APP_EVENTS.LOG_CREATED, log);
    return { ok: true };
  });

  eventBus.on(APP_EVENTS.LOG_CREATED, (log: JobLog) => {
    mainWindow?.webContents.send(APP_EVENTS.LOG_CREATED, log);
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
