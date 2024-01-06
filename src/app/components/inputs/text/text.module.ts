import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text.component';

@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    TextInputComponent
  ]
})
export class TextInputModule { }