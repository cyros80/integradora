import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-secretocuatro',
  templateUrl: './secretocuatro.component.html',
  styleUrls: ['./secretocuatro.component.scss'],
})
export class SecretocuatroComponent implements OnInit {

  constructor(private mdlCtrl:ModalController) { }
//funcion para regresar
  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {}

}
