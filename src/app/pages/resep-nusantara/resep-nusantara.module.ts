import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepNusantaraPageRoutingModule } from './resep-nusantara-routing.module';

import { ResepNusantaraPage } from './resep-nusantara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepNusantaraPageRoutingModule
  ],
  declarations: [ResepNusantaraPage]
})
export class ResepNusantaraPageModule {}
