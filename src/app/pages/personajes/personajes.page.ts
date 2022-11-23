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

  personaje: Datos []=[];
  personajes: Datos []=[];
  constructor(private servicioPersonajes:PersonajesService,private mdlctrl:ModalController) { }

  async verDetalle(id:number){
    const modal=await this.mdlctrl.create({
      component:DetalleComponent,
      componentProps:{id}
    });
    modal.present();
  }

  async verDetallePersonaje(id:number){
    const modal=await this.mdlctrl.create({
      component:DetallePersonajesComponent,
      componentProps:{id}
    });
    modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getdatos()
    .subscribe((resp:Personas)=>{
      console.log('Personajes',resp)
      this.personaje=resp.datos
    })

    this.servicioPersonajes.getdatos()
    .subscribe((resp:Personas)=>{
      console.log('Enemigos',resp)
      this.personajes=resp.datos2
    })

  }

  segmentChanged(event: CustomEvent){
    this.valueSelected = event.detail.value;
    console.log(this.valueSelected);

  }
  

}
