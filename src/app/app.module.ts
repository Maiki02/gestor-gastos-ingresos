import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//----------- PAGES ------------\\
import { HomeModule } from './pages/home/home.module';
import { LabelsPageModule } from './pages/labels/labels.module';
import { RegisterPageModule } from './pages/register/register.module';
import { LoginPageModule } from './pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LabelsPageModule,
    RegisterPageModule,
    LoginPageModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [AuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('456841362148-ivviokq7vf85libe3ruf9v66atho23gd.apps.googleusercontent.com') // Aquí debes colocar tu Client ID de Google
          },
          // Puedes agregar más proveedores si lo deseas
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
