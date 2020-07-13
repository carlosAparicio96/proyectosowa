import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletarRecetaPage } from './completar-receta.page';

const routes: Routes = [
  {
    path: '',
    component: CompletarRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletarRecetaPageRoutingModule {}
