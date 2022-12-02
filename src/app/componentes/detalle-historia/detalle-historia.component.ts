import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-historia',
  templateUrl: './detalle-historia.component.html',
  styleUrls: ['./detalle-historia.component.scss'],
})
export class DetalleHistoriaComponent implements OnInit {

  constructor(private mdlCtrl:ModalController) { }
//funcion de regresar
  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {}

}
