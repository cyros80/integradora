import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  getdatos(){
    return this.http.get('https://proyectofinal-46c8d-default-rtdb.firebaseio.com/personajes/.json');
  }

  getDetallesEnemigos(id:number){
    return this.http.get('https://proyectofinal-46c8d-default-rtdb.firebaseio.com/personajes/datos2/'+id+'.json');
  }

  getDetallesPersonajes(id:number){
    return this.http.get('https://proyectofinal-46c8d-default-rtdb.firebaseio.com/personajes/datos/'+id+'.json');
  }
}
