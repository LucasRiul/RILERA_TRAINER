import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './navbar/payments/payments.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { StudentsComponent } from './navbar/students/students.component';
import { TrainingComponent } from './navbar/training/training.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'profile', component: ProfileComponent }

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
