import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsCardComponent } from './labels-card.component';

@NgModule({
  declarations: [
    LabelsCardComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    LabelsCardComponent
  ]
})
export class LabelsCardModule { }