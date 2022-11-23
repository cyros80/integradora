import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { DetalleComponent } from '../../componentes/detalle/detalle.component';
import { PersonajesService } from 'src/app/services/personajes.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {




  constructor(private servicioPlanetas:PersonajesService,
    private modalCrtl:ModalController) { }

    async verDetalle(name:string){
      const modal=await this.modalCrtl.create({
        component:DetalleComponent,
        componentProps:{name}
      });

      modal.present();
    }

  ngOnInit() {


  }

}
