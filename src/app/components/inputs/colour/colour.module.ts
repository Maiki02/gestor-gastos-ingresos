import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColourInputComponent } from './colour.component';



@NgModule({
  declarations: [
    ColourInputComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    ColourInputComponent
  ]
})
export class ColourInputModule { }
