import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersTableComponent } from './registers.component';
import { LabelModule } from '../label/label.module';

@NgModule({
  declarations: [
    RegistersTableComponent
  ],
  imports: [
    CommonModule,
    LabelModule
  ], exports: [
    RegistersTableComponent
  ]
})
export class RegistersTableModule { }