import { Component, OnInit } from '@angular/core';
import { MployeeService } from '../services/mployee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  public employees: any = []
  constructor(private _employeeService : MployeeService) { }

  ngOnInit() {
    this._employeeService.getMployees()
    .subscribe(data => this.employees = data);
  }

}
