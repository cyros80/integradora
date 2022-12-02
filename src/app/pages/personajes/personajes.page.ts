import { Component, OnInit } from '@angular/core';

import { PersonajesService } from '../../services/personajes.service';
import { Personas, Datos } from '../../interfaces/interfaces';
import { AlertController, ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';
import { DetallePersonajesComponent } from 'src/app/componentes/detalle-personajes/detalle-personajes.component';
import { async } from '@angular/core/testing';
import { HttpResponse } from '@capacitor/core';
import { Style } from '@capacitor/status-bar';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  valueSelected:String = 'personajes';
//////Obtencion de los datos del Interface
  personaje: Datos []=[];
  personajes: Datos []=[];
  constructor(private servicioPersonajes:PersonajesService,private mdlctrl:ModalController,private alerController: AlertController) { }
  ///// Consulta ID Para ver el Detalle de los Enemigos
  async verDetalle(id:number){
    const modal=await this.mdlctrl.create({
      component:DetalleComponent,
      componentProps:{id}
    });
    modal.present();
  }
  ///// Consulta ID Para ver el Detalle de los Personajes
  async verDetallePersonaje(id:number){
    const modal=await this.mdlctrl.create({
      component:DetallePersonajesComponent,
      componentProps:{id}
    });
    modal.present();

    
  }
  //mensaje de error de conexion
  async presentAlert() {
    const alert = await this.alerController.create({
      header : 'Alerta',
      subHeader: 'No se pudo obtener los datos',
      message: 'Error al obtener los datos verifica tu conexion. Si el problema perdura consulta al desarrollador.',
      buttons: ['OK'],
    });

    await alert.present();
  } 
   

  ngOnInit() {
    ////Consulta de Datos para los Personajes
    this.servicioPersonajes.getdatos()
    .subscribe((resp:Personas)=>{
      console.log('Personajes',resp)
      this.personaje=resp.datos
    },(errorR: HttpResponse)=>{
      if (errorR.status===0) {
        this.presentAlert();
      }
  })
    ////Consulta de Datos para los enemigos
    this.servicioPersonajes.getdatos()
    .subscribe((resp:Personas)=>{
      console.log('Enemigos',resp)
      this.personajes=resp.datos2
    })

  }
  ///// Evento para el Segment
  segmentChanged(event){
    
    this.valueSelected = event.detail.value;
    console.log(this.valueSelected);

  }
  

}
