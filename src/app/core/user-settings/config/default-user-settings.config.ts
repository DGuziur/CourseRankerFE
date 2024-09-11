import { UserSettings } from '../types/user-settings.type';

export const DEFAULT_USER_SETTINGS: UserSettings = {
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  listView: 'list',
};
