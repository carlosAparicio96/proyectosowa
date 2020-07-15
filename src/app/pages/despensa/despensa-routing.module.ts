import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespensaPage } from './despensa.page';

const routes: Routes = [
  {
    path: '',
    component: DespensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespensaPageRoutingModule {}
