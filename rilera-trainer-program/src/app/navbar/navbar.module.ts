import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { TrainingComponent } from './training/training.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    PaymentsComponent,
    ProfileComponent,
    SidenavComponent,
    StudentsComponent,
    TrainingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
