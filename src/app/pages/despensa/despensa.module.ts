import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespensaPageRoutingModule } from './despensa-routing.module';

import { DespensaPage } from './despensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespensaPageRoutingModule
  ],
  declarations: [DespensaPage]
})
export class DespensaPageModule {}
