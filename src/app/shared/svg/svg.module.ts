import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSvgComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    EditSvgComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    EditSvgComponent
  ]
})
export class SvgModule { }
