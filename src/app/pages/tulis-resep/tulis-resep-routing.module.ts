import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulisResepPage } from './tulis-resep.page';

const routes: Routes = [
  {
    path: '',
    component: TulisResepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulisResepPageRoutingModule {}
