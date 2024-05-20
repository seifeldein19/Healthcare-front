import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HealthycareComponent } from './healthycare/healthycare.component';
import { LoginHospitalComponent } from './login-hospital/login-hospital.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'bloodbank', canActivate:[AuthGuard],component:BloodbankComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'hospitals',component:HospitalsComponent},
  {path:'form',component:FormComponent},
  {path:'healthycare',component:HealthycareComponent},
  {path:'login-hospital',component:LoginHospitalComponent},
  {path:'dashboard/:first_name',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
