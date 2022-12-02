import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SecretounoComponent } from '../../componentes/secretouno/secretouno.component';
import { SecretodosComponent } from '../../componentes/secretodos/secretodos.component';
import { SecretotresComponent } from '../../componentes/secretotres/secretotres.component';
import { SecretocuatroComponent } from '../../componentes/secretocuatro/secretocuatro.component';

@Component({
  selector: 'app-secretos',
  templateUrl: './secretos.page.html',
  styleUrls: ['./secretos.page.scss'],
})
export class SecretosPage implements OnInit {

  constructor(private mdlCtrl:ModalController) { }
//Funciones para ver los Detalles de secretos
  async verDetalle1(){
    const modal=await this.mdlCtrl.create({
      component:SecretounoComponent,
      
    });

    modal.present();
  }

  async verDetalle2(){
    const modal=await this.mdlCtrl.create({
      component:SecretodosComponent,
      
    });

    modal.present();
  }

  async verDetalle3(){
    const modal=await this.mdlCtrl.create({
      component:SecretotresComponent,
      
    });

    modal.present();
  }

  async verDetalle4(){
    const modal=await this.mdlCtrl.create({
      component:SecretocuatroComponent,
      
    });

    modal.present();
  }

  ngOnInit() {
  }

}
