import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ITheme, ThemeStorageService } from './theme-storage/theme-storage.service';
import { StyleManagerService } from './style-manager/style-manager.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent {
  currentTheme;
  themes: Array<ITheme> = [
    {
      primary: '#e91e63',
      accent: '#607d8b',
      href: 'dark-pink.css',
      isDark: true,
    },
    {
      primary: '#f6b26b',
      accent: '#607d8b',
      href: 'orange.css',
      isDark: false,
      isDefault: true,
    }
  ];

  constructor(public styleManager: StyleManagerService, private _themeStorage: ThemeStorageService) {
    const currentTheme = this._themeStorage.getStoredTheme();

    if (currentTheme) {
      this.installTheme(currentTheme);
    }
  }

  private _getCurrentThemeFromHref(href: string): ITheme {
    return this.themes.find(theme => theme.href === href);
  }

  installTheme(theme: ITheme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);
    console.log(theme);
    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/styles/themes/app-${theme.href}`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

}
