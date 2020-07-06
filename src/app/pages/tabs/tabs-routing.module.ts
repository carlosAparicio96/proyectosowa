import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'mis-recetas',
        loadChildren:'../mis-recetas/mis-recetas.routing.module#MisRecetasPageRoutingModule'
      },
      {
        path:'new-receta',
        loadChildren:'../new-receta/new-receta.routing.module#NewRecetaPageRoutingModule'
      },
      {
        path:'home',
        loadChildren:'../home/home.routing.module#HomePageRoutingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
