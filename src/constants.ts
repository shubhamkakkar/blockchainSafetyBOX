import Config from 'react-native-config';

export enum FONT_SIZES {
  LARGE_HEADER = 38,
  MEDIUM_HEADER = 32,
  SMALL_HEADER = 28,
  LARGE_TEXT = 24,
  LARGE_TEXT_ALTERNATIVE = 24,
  MEDIUM_TEXT = 16,
  MEDIUM_TEXT_ALTERNATIVE = 18,
  MEDIUM_LARGE_TEXT = 20,
  SMALL_TEXT = 13,
  SMALLER_TEXT = 12,
  SMALLEST_TEXT = 10,
  SMALL_TEXT_ALTERNATE = 14,
}

export enum ASYNC_STORAGE_KEYS {
  AUTH_TOKEN = 'BSB.AUTH_TOKEN',
}

export enum USER_ROLE_TYPE {
  USER = 'user',
  ADMIN = 'admin',
}

export const DEFAULT_HORIZONTAL_PADDING = 20;
export const DEFAULT_VERTICAL_PADDING = 20;
export const DEFAULT_VERTICAL_MARGIN = 20;

export const DEV = __DEV__;
// env params
export const APIUrl = Config.API_URL;
