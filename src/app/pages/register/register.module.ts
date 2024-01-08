import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { TextInputModule } from 'src/app/components/inputs/text/text.module';
import { LabelsCardModule } from 'src/app/components/labels-card/labels-card.module';
import { DateInputModule } from 'src/app/components/inputs/date/date.module';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SelectModule,
    TextInputModule,
    DateInputModule,
    LabelsCardModule,
  ], exports: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule { }