import { NavbarModule } from './navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './navbar/body/body.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { StudentsComponent } from './navbar/students/students.component';
import { TrainingComponent } from './navbar/training/training.component';
import { PaymentsComponent } from './navbar/payments/payments.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { NgClass } from '@angular/common';
import { LoginComponent } from './Login/login/login.component';
import { AuthService } from './Login/login/auth.service';
import {NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NavbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
