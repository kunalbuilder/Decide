/// <reference types="vite/client" />
import type { DecideApi } from '../main/preload';

declare global {
  interface Window {
    decide: DecideApi;
  }
}
