import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepEditPage } from './resep-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ResepEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepEditPageRoutingModule {}
