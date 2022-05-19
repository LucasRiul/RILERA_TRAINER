import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [ 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
