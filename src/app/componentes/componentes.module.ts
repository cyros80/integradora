import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleHistoriaComponent } from './detalle-historia/detalle-historia.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [DetalleComponent,DetalleHistoriaComponent,DetallePersonajesComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[DetalleComponent,DetalleHistoriaComponent,DetallePersonajesComponent]
})
export class ComponentesModule { }
