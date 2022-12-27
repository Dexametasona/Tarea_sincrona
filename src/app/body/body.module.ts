import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionComponent } from './seccion/seccion.component';
import { CabeceraBodyComponent } from './cabecera-body/cabecera-body.component';



@NgModule({
  declarations: [
    SeccionComponent,
    CabeceraBodyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeccionComponent, CabeceraBodyComponent
  ]
})
export class BodyModule { }
