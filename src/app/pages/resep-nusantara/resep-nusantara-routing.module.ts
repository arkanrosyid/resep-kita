import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepNusantaraPage } from './resep-nusantara.page';

const routes: Routes = [
  {
    path: '',
    component: ResepNusantaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepNusantaraPageRoutingModule {}
