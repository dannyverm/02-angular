import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {

  progreso1: number = 15

  getProgreso1() {
    return `${this.progreso1}%`;
  }



}
