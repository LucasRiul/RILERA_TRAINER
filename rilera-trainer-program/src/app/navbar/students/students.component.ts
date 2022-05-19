import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild('filterDate') filterDate;

  public space = ".    ";
  public rows;
  public ColumnMode = ColumnMode;
  public selectedPlan;
  public selectedName;

  
  constructor(private _studentsService: StudentsService) { }

  public selectPlan = this._studentsService.selectPlan;
  
  filterByPlan() {
    this.rows = this._studentsService.filterRows(this.selectedName, this.selectedPlan)
  }
  filterByName() {
    let cal: string = this.selectedName.toLowerCase();
    this.rows = this._studentsService.filterRows(cal, this.selectedPlan)
  }
  ngOnInit(): void {
    this.rows = this._studentsService.getStudents();
  }

}
