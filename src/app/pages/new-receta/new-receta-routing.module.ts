import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRecetaPage } from './new-receta.page';

const routes: Routes = [
  {
    path: '',
    component: NewRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRecetaPageRoutingModule {}
