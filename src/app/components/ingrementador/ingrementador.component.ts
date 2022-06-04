import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ingrementador',
  templateUrl: './ingrementador.component.html',
  styles: [
  ]
})
export class IngrementadorComponent {

  @Input('valor') progreso: number = 25;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor>0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor<0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    
    this.progreso = this.progreso + valor;
    
    this.valorSalida.emit(this.progreso);

    return this.progreso;
  }

}
