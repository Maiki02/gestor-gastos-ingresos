import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabelsPageComponent } from './pages/labels/labels.component';
import { NAVEGATION } from './shared/const/navegation';
import { RegisterPageComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: NAVEGATION.home, component: HomeComponent},
  {path: NAVEGATION.labels, component: LabelsPageComponent},
  {path: NAVEGATION.register, component: RegisterPageComponent},
  {path: NAVEGATION.notFound, redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
