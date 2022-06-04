import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>;
  constructor( private settingService: SettingsService ) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    // todo este codigo lo implementaremos desde el SERVICE
    // const link = `./assets/css/colors/${theme}.css`;
    // this.linkTheme?.setAttribute('href', link);
    // localStorage.setItem('theme', link);
    this.settingService.changeTheme(theme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    
       this.links.forEach(e => {
        e.classList.remove('working');
        const btnTheme= e.getAttribute('data-theme')
        const btnUrlTheme= `./assets/css/colors/${btnTheme}.css`;
        const currentTheme= this.linkTheme?.getAttribute('href');

        if(btnUrlTheme === currentTheme){
          e.classList.add('working')
        }
    })
  }
}
