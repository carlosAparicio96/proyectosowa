import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIngredienteDespensaPage } from './add-ingrediente-despensa.page';

const routes: Routes = [
  {
    path: '',
    component: AddIngredienteDespensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIngredienteDespensaPageRoutingModule {}
