import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BootstrapFormsModule } from './bootstrap-forms/bootstrap-forms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BootstrapFormsModule
  ],
  exports: [
    BootstrapFormsModule
  ]
})
export class SharedModule { }
