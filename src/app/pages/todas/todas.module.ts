import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodasPageRoutingModule } from './todas-routing.module';

import { TodasPage } from './todas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodasPageRoutingModule
  ],
  declarations: [TodasPage]
})
export class TodasPageModule {}
