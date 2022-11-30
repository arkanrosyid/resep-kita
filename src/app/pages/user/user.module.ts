import { UserComponentModule } from './../../components/user-page/user-page.module';
import { UserPageComponent } from './../../components/user-page/user-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    UserComponentModule,
  ],
  declarations: [UserPage],
})
export class UserPageModule {}
