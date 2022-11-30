import { ErrorMessageComponent } from './../../components/error-message/error-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [ErrorMessageComponent],
  declarations: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
