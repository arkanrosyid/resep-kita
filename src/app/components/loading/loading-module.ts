import { LoadingComponent } from './loading.component';
import { ErrorMessageComponent } from './../../components/error-message/error-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
})
export class LoadingComponentModule {}
