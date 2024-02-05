import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonInputModule } from 'src/app/components/inputs/button/button.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonInputModule
  ], exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }