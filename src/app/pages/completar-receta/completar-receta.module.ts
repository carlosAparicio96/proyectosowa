import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletarRecetaPageRoutingModule } from './completar-receta-routing.module';

import { CompletarRecetaPage } from './completar-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletarRecetaPageRoutingModule
  ],
  declarations: [CompletarRecetaPage]
})
export class CompletarRecetaPageModule {}
