import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepSayaPageRoutingModule } from './resep-saya-routing.module';

import { ResepSayaPage } from './resep-saya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepSayaPageRoutingModule
  ],
  declarations: [ResepSayaPage]
})
export class ResepSayaPageModule {}
