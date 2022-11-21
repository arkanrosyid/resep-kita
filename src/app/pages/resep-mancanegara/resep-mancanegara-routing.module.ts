import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepMancanegaraPage } from './resep-mancanegara.page';

const routes: Routes = [
  {
    path: '',
    component: ResepMancanegaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepMancanegaraPageRoutingModule {}
