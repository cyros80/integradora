import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-secretotres',
  templateUrl: './secretotres.component.html',
  styleUrls: ['./secretotres.component.scss'],
})
export class SecretotresComponent implements OnInit {

  constructor(private mdlCtrl:ModalController) { }
//funcion para regresar
  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {}

}
