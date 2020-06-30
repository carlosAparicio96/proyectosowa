import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodasPage } from './todas.page';

const routes: Routes = [
  {
    path: '',
    component: TodasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodasPageRoutingModule {}
