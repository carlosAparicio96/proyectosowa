import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { RecetaPageModule } from './pages/receta/receta.module';


const routes: Routes = [
  {
    path: 'receta',
    loadChildren: () => import('./pages/receta/receta.module').then(m => m.RecetaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'receta/:id',
    loadChildren: () => import('./pages/receta/receta.module').then(m => m.RecetaPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mis-recetas',
    loadChildren: () => import('./pages/mis-recetas/mis-recetas.module').then( m => m.MisRecetasPageModule)
  },
  {
    path: 'todas',
    loadChildren: () => import('./pages/todas/todas.module').then( m => m.TodasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

