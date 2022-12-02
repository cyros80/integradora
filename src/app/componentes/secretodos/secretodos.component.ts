import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-secretodos',
  templateUrl: './secretodos.component.html',
  styleUrls: ['./secretodos.component.scss'],
})
export class SecretodosComponent implements OnInit {

  constructor(private mdlCtrl:ModalController) { }
//funcion para regresar
  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {}

}
