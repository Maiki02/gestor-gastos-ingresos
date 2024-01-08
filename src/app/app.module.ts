import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//----------- PAGES ------------\\
import { HomeModule } from './pages/home/home.module';
import { LabelsPageModule } from './pages/labels/labels.module';
import { RegisterPageModule } from './pages/register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LabelsPageModule,
    RegisterPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
