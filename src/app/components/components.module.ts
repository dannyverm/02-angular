import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngrementadorComponent } from './ingrementador/ingrementador.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    IngrementadorComponent,

  ],
  exports: [
    IngrementadorComponent,
 
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
