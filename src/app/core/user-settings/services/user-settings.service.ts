import { Injectable } from '@angular/core';
import { UserSettings } from '../types/user-settings.type';
import { DEFAULT_USER_SETTINGS } from '../config/default-user-settings.config';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  private readonly defaultSettings: UserSettings = DEFAULT_USER_SETTINGS;
  protected userSettings: UserSettings;

  constructor() {
    this.userSettings = this.getUserSettings();
    console.log(this.userSettings);
  }

  private getUserSettings(): UserSettings {
    const settings = localStorage.getItem('userSettings');
    if (settings) {
      return JSON.parse(settings);
    }
    return this.defaultSettings;
  }
}
