import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsModule } from './students/students.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarComponent } from './navbar.component';
import { TrainingComponent } from './training/training.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PaymentsComponent,
    ProfileComponent,
    SidenavComponent,
    TrainingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DashboardModule,
    StudentsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
