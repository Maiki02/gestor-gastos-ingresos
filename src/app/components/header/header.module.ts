import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SvgModule } from 'src/app/shared/svg/svg.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ], exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }