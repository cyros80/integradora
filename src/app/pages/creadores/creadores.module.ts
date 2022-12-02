import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreadoresPageRoutingModule } from './creadores-routing.module';

import { CreadoresPage } from './creadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreadoresPageRoutingModule
  ],
  declarations: [CreadoresPage]
})
export class CreadoresPageModule {}
