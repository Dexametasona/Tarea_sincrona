import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01',
  templateUrl: './ejemplo01.component.html',
  styleUrls: ['./ejemplo01.component.css']
})
export class Ejemplo01Component implements OnInit {
  nombre='';
  apellido='';
  respuesta:string='';
  registro=false

  setRespuesta(){
    this.registro=true
    this.respuesta='Usuario registrado'
  }
  ngOnInit(): void {
  }

}
