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
   ////Funcion para regresar a la pantalla anterior
  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {
    ////Obtener datos para un ID especifico de los enemigos
    this.servicio.getDetallesEnemigos(this.id).subscribe((resp:Datos2) => {
      console.log('InformacioDB', resp) 
      this.enemigos = resp;
      
     })
  }

}
