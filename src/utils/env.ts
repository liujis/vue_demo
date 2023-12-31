import type { GlobEnvConfig, GlobConfig } from '@/types/config.d'

export function getAppEnvConfig(): GlobConfig {
  const {
    VITE_GLOB_APP_TITLE,
  } = import.meta.env as unknown as GlobEnvConfig

  return {
    title: VITE_GLOB_APP_TITLE,
  }
}

/**
 * @description: Development mode
 */
export const devMode = 'development';

/**
 * @description: Production mode
 */
export const prodMode = 'production';

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}