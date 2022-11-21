import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulisResepPageRoutingModule } from './tulis-resep-routing.module';

import { TulisResepPage } from './tulis-resep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulisResepPageRoutingModule
  ],
  declarations: [TulisResepPage]
})
export class TulisResepPageModule {}
