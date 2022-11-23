import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }
//////Datos Personajes.html
  getdatos(){
    return this.http.get('https://proyectofinal-46c8d-default-rtdb.firebaseio.com/personajes/.json');
  }
//////Detalles Personajes
  getDetallesEnemigos(id:number){
    return this.http.get('https://proyectofinal-46c8d-default-rtdb.firebaseio.com/personajes/datos2/'+id+'.json');
  }
/////Detalle Enemigos
  getDetallesPersonajes(id:number){
    return this.http.get('https://proyectofinal-46c8d-default-rtdb.firebaseio.com/personajes/datos/'+id+'.json');
  }
}
