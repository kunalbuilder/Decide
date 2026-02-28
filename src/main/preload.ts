import { contextBridge, ipcRenderer } from 'electron';
import { APP_EVENTS } from './eventBus';
import type { JobLog } from '../shared/types';

const api = {
  listLogs: () => ipcRenderer.invoke('logs:list') as Promise<JobLog[]>,
  addLog: (message: string) => ipcRenderer.invoke('logs:add', message) as Promise<JobLog>,
  connectGoogleDrive: () => ipcRenderer.invoke('integrations:connect-google-drive'),
  connectWhatsApp: () => ipcRenderer.invoke('integrations:connect-whatsapp'),
  createWorkflow: (payload: Record<string, string>) => ipcRenderer.invoke('workflow:create', payload),
  onLogCreated: (callback: (log: JobLog) => void) => {
    const listener = (_event: unknown, log: JobLog) => callback(log);
    ipcRenderer.on(APP_EVENTS.LOG_CREATED, listener);
    return () => ipcRenderer.off(APP_EVENTS.LOG_CREATED, listener);
  },
};

contextBridge.exposeInMainWorld('decide', api);

export type DecideApi = typeof api;
