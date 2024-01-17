import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { TextInputModule } from 'src/app/components/inputs/text/text.module';
import { LabelsCardModule } from 'src/app/components/labels-card/labels-card.module';
import { DateInputModule } from 'src/app/components/inputs/date/date.module';
import { ButtonInputModule } from 'src/app/components/inputs/button/button.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NumberInputModule } from 'src/app/components/inputs/number/number.module';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SelectModule,
    LabelsCardModule,

    //INPUTS
    NumberInputModule,
    ButtonInputModule,
    TextInputModule,
    DateInputModule,

    FooterModule
  ], exports: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule { }