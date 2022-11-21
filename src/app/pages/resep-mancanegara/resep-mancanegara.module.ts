import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepMancanegaraPageRoutingModule } from './resep-mancanegara-routing.module';

import { ResepMancanegaraPage } from './resep-mancanegara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepMancanegaraPageRoutingModule
  ],
  declarations: [ResepMancanegaraPage]
})
export class ResepMancanegaraPageModule {}
