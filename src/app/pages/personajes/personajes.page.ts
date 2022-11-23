import { Component, OnInit } from '@angular/core';

import { PersonajesService } from '../../services/personajes.service';
import { Personas, Datos } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';
import { DetallePersonajesComponent } from 'src/app/componentes/detalle-personajes/detalle-personajes.component';


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
  constructor(private servicioPersonajes:PersonajesService,private mdlctrl:ModalController) { }
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

  ngOnInit() {
    ////Consulta de Datos para los Personajes
    this.servicioPersonajes.getdatos()
    .subscribe((resp:Personas)=>{
      console.log('Personajes',resp)
      this.personaje=resp.datos
    })
    ////Consulta de Datos para los enemigos
    this.servicioPersonajes.getdatos()
    .subscribe((resp:Personas)=>{
      console.log('Enemigos',resp)
      this.personajes=resp.datos2
    })

  }
  ///// Evento para el Segment
  segmentChanged(event: CustomEvent){
    this.valueSelected = event.detail.value;
    console.log(this.valueSelected);

  }
  

}
