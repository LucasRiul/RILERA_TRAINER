import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgSelectModule,
    NgxDatatableModule,
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
