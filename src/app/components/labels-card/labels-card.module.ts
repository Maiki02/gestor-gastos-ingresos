import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsCardComponent } from './labels-card.component';
import { LabelModule } from '../label/label.module';
import { PlusSignModule } from '../plus-sign/plus-sign.module';

@NgModule({
  declarations: [
    LabelsCardComponent
  ],
  imports: [
    CommonModule,
    LabelModule,
    PlusSignModule
  ], exports: [
    LabelsCardComponent
  ]
})
export class LabelsCardModule { }