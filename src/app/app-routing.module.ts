import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';


const routes: Routes = [
  {
    path: ':id/receta',
    loadChildren: () => import('./pages/receta/receta.module').then(m => m.RecetaPageModule)
  },
  {
    path: ':id/home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: ':id/mis-recetas',
    loadChildren: () => import('./pages/mis-recetas/mis-recetas.module').then( m => m.MisRecetasPageModule)
  },
  {
    path: ':id/todas',
    loadChildren: () => import('./pages/todas/todas.module').then( m => m.TodasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: ':id/new-receta',
    loadChildren: () => import('./pages/new-receta/new-receta.module').then( m => m.NewRecetaPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: ':id/:id/completar-receta',
    loadChildren: () => import('./pages/completar-receta/completar-receta.module').then( m => m.CompletarRecetaPageModule)
  },
  {
    path: ':id/usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: ':id/add-ingrediente-despensa',
    loadChildren: () => import('./pages/add-ingrediente-despensa/add-ingrediente-despensa.module').then( m => m.AddIngredienteDespensaPageModule)
  },
  {
    path: ':id/despensa',
    loadChildren: () => import('./pages/despensa/despensa.module').then( m => m.DespensaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

