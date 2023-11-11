import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsPageComponent } from './labels.component';
import { SelectModule } from 'src/app/components/select/select.module';
import { LabelModule } from 'src/app/components/label/label.module';
import { LabelsCardModule } from 'src/app/components/labels-card/labels-card.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ColourInputModule } from 'src/app/components/inputs/colour/colour.module';
import { ButtonInputModule } from 'src/app/components/inputs/button/button.module';

@NgModule({
  declarations: [
    LabelsPageComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    LabelModule,
    LabelsCardModule,
    ColourInputModule,
    ButtonInputModule,
    FooterModule
  ], exports: [
    LabelsPageComponent
  ]
})
export class LabelsPageModule { }