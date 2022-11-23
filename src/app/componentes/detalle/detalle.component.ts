import { Component, Input, OnInit } from '@angular/core';
import { Datos2 } from 'src/app/interfaces/interfaces';
import { PersonajesService } from '../../services/personajes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input()id:number;

  enemigos: Datos2={};

  constructor(private servicio:PersonajesService, private mdlCtrl:ModalController) { }

  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {
    this.servicio.getDetallesEnemigos(this.id).subscribe((resp:Datos2) => {
      console.log('InformacioDB', resp) 
      this.enemigos = resp;
      
     })
  }

}
