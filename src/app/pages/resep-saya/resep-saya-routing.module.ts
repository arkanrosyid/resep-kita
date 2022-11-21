import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepSayaPage } from './resep-saya.page';

const routes: Routes = [
  {
    path: '',
    component: ResepSayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepSayaPageRoutingModule {}
