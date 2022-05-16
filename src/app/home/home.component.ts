import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

    this.guardar_datos();
   }

  ngOnInit(): void {
  }

  guardar_datos(){
 
  }
  usuario:any={
    nombre:"xxx",
    fecha:"nacimiento",
    correo:"zzz@www.com",
    sexo:"Hombre, mujer",
    }
    

}
