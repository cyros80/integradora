import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreadoresPage } from './creadores.page';

const routes: Routes = [
  {
    path: '',
    component: CreadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreadoresPageRoutingModule {}
