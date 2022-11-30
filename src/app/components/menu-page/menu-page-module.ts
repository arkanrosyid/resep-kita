import { MenuPageComponent } from './menu-page.component';
import { LoadingComponent } from './../loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [MenuPageComponent],
  declarations: [MenuPageComponent],
})
export class MenuComponentModule {}
