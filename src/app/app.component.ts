import { Component } from '@angular/core';

interface Elemento{
  icono:string;
  nombre:string;
  ruta:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  elementos: Elemento[]=[{
    icono:'people-circle',
    nombre:'Personajes',
    ruta:'personajes'
},{
  icono:'home-outline',
    nombre:'Principal',
    
    ruta:'inicio'
},{
  icono:'planet',
    nombre:'Secretos',
    ruta:'secretos'
}
]
  constructor() {}
}
