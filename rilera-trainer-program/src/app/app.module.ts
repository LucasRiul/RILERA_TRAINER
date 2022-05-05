import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
