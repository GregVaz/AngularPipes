import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Gregorio';
  nombre2: string = 'StrNGJ MejoWDs HiMEnez';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;
  porcentaje: number  = 0.2345;

  salario: number = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolwerine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  valorPromesa  = new Promise<string>( (resolve) => {
    setTimeout( () => {
      resolve('Llego la data');
    }, 3500);
  });

  fecha: Date = new Date();

  idioma: string = 'fr';

  videoUrl: string = 'https://www.youtube.com/embed/RmpWBTM_ZOg';

  activar: boolean = true;

  cambiarIdioma(idioma) {
    this.idioma = idioma;
  }

}
