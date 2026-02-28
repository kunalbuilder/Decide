import { EventEmitter } from 'node:events';

class AppEventBus extends EventEmitter {}

export const eventBus = new AppEventBus();

export const APP_EVENTS = {
  LOG_CREATED: 'log:created',
} as const;
