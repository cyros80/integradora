import { Component, Input, OnInit } from '@angular/core';
import { Datos2 } from '../../interfaces/interfaces';
import { PersonajesService } from '../../services/personajes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.scss'],
})
export class DetallePersonajesComponent implements OnInit {

  @Input()id:number;

  personajes: Datos2={};

  constructor(private servicio:PersonajesService, private mdlCtrl:ModalController) { }

  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {
    this.servicio.getDetallesPersonajes(this.id).subscribe((resp:Datos2) => {
      console.log('InformacioDB', resp) 
      this.personajes = resp;
      
     })
  }

}
