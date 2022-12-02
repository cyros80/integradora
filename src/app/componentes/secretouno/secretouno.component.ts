import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-secretouno',
  templateUrl: './secretouno.component.html',
  styleUrls: ['./secretouno.component.scss'],
})
export class SecretounoComponent implements OnInit {

  constructor(private mdlCtrl:ModalController) { }
//funcion para regresar
  regresar(){
    this.mdlCtrl.dismiss();
  }

  ngOnInit() {}

}
