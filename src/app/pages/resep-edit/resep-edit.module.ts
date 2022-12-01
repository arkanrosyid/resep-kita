import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepEditPageRoutingModule } from './resep-edit-routing.module';

import { ResepEditPage } from './resep-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepEditPageRoutingModule
  ],
  declarations: [ResepEditPage]
})
export class ResepEditPageModule {}
