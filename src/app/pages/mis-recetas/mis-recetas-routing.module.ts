import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisRecetasPage } from './mis-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: MisRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisRecetasPageRoutingModule {}
