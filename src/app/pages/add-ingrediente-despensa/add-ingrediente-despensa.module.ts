import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIngredienteDespensaPageRoutingModule } from './add-ingrediente-despensa-routing.module';

import { AddIngredienteDespensaPage } from './add-ingrediente-despensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIngredienteDespensaPageRoutingModule
  ],
  declarations: [AddIngredienteDespensaPage]
})
export class AddIngredienteDespensaPageModule {}
