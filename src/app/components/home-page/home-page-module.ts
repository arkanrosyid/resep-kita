import { HomePageComponent } from '../../components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
})
export class HomeComponentModule {}
