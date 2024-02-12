import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonInputModule } from 'src/app/components/inputs/button/button.module';
import { TextInputModule } from 'src/app/components/inputs/text/text.module';
import { GoogleSigninButtonModule, SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonInputModule,
    TextInputModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ], exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }