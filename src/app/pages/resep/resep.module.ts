import { ResepComponentModule } from './../../components/resep-page/resep-page-module';
import { ResepPageComponent } from '../../components/resep-page/resep-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepPageRoutingModule } from './resep-routing.module';

import { ResepPage } from './resep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepPageRoutingModule,
    ResepComponentModule,
  ],
  declarations: [ResepPage],
})
export class ResepPageModule {}
