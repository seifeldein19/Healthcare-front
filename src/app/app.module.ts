import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { FormComponent } from './form/form.component';
import { HealthycareComponent } from './healthycare/healthycare.component';
import { LoginHospitalComponent } from './login-hospital/login-hospital.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    BloodbankComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HospitalsComponent,
    FormComponent,
    HealthycareComponent,
    LoginHospitalComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
