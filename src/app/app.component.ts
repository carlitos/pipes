import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'Carlos';
  nombreCompleto = 'carlos moiSES casTRo jimenez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
   nombre: 'Logan',
   clave: 'Wolverine',
   edad: 500,
   direccion: {
     calle: 'Jupiter',
     casa: '222'
   }
  };

  valorDePromesa = new Promise( ( resolve, reject  ) => {
    setTimeout( () => resolve('Llego la data'), 3500 );
  });

  fecha = new Date();

  video = 'mc1_ODoanz8';

  activar = true;

}
