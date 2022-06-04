import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    var ruta = localStorage.getItem('theme') || './assets/css/colors/default-dark.css'
    this.linkTheme?.setAttribute('href', ruta);
  }

  changeTheme(theme: string){
    const link = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', link);
    localStorage.setItem('theme', link);
  }

}
