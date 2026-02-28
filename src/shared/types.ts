export type LogLevel = 'info' | 'warn' | 'error';

export interface JobLog {
  id: number;
  message: string;
  level: LogLevel;
  createdAt: string;
}
