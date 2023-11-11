import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsCardComponent } from './labels-card.component';
import { LabelModule } from '../label/label.module';

@NgModule({
  declarations: [
    LabelsCardComponent
  ],
  imports: [
    CommonModule,
    LabelModule
  ], exports: [
    LabelsCardComponent
  ]
})
export class LabelsCardModule { }