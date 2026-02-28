import Database from 'better-sqlite3';
import path from 'node:path';
import { app } from 'electron';
import type { JobLog, LogLevel } from '../../shared/types';

let db: Database.Database | null = null;

function getDbPath() {
  return path.join(app.getPath('userData'), 'decide.db');
}

export function initDb(): Database.Database {
  if (db) return db;

  db = new Database(getDbPath());
  db.exec(`
    CREATE TABLE IF NOT EXISTS logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message TEXT NOT NULL,
      level TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  return db;
}

export function addLog(message: string, level: LogLevel = 'info'): JobLog {
  const database = initDb();

  const insert = database.prepare(
    `INSERT INTO logs (message, level, created_at) VALUES (?, ?, datetime('now'))`,
  );
  const result = insert.run(message, level);

  const row = database
    .prepare(`SELECT id, message, level, created_at as createdAt FROM logs WHERE id = ?`)
    .get(result.lastInsertRowid) as JobLog;

  return row;
}

export function listLogs(limit = 100): JobLog[] {
  const database = initDb();

  return database
    .prepare(
      `SELECT id, message, level, created_at as createdAt FROM logs ORDER BY id DESC LIMIT ?`,
    )
    .all(limit) as JobLog[];
}
