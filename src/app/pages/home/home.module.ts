import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { LabelsCardModule } from 'src/app/components/labels-card/labels-card.module';
import { RegistersTableModule } from 'src/app/components/registers/registers.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SelectModule,
    
    LabelsCardModule,
    RegistersTableModule
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }