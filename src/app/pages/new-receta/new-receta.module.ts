import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewRecetaPageRoutingModule } from './new-receta-routing.module';
import { NewRecetaPage } from './new-receta.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecetaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewRecetaPage]
})
export class NewRecetaPageModule {}
