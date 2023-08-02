import { Component, OnInit } from '@angular/core';
import { MployeeService } from '../services/mployee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any = []

  constructor(private _employeeService : MployeeService) { }

  ngOnInit() {
    this._employeeService.getMployees()
    .subscribe(data => this.employees = data);
  }

}
