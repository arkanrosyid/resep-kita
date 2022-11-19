import { HomePageComponent } from '../../components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, HomePageComponent],
})
export class HomePageModule {}
