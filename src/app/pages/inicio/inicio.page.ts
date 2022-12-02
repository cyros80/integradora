import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { DetalleComponent } from '../../componentes/detalle/detalle.component';
import { PersonajesService } from 'src/app/services/personajes.service';
import { DetalleHistoriaComponent } from '../../componentes/detalle-historia/detalle-historia.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {




  constructor(private servicioPlanetas:PersonajesService,
    private modalCrtl:ModalController) { }
//Detalle para ver la historia
    async verDetalle(){
      const modal=await this.modalCrtl.create({
        component:DetalleHistoriaComponent,
        
      });

      modal.present();
    }

  ngOnInit() {


  }

}
