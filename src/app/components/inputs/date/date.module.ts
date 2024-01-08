import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './date.component';

@NgModule({
  declarations: [
    DateInputComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    DateInputComponent
  ]
})
export class DateInputModule { }
