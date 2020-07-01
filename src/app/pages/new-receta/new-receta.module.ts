import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRecetaPageRoutingModule } from './new-receta-routing.module';

import { NewRecetaPage } from './new-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecetaPageRoutingModule
  ],
  declarations: [NewRecetaPage]
})
export class NewRecetaPageModule {}
