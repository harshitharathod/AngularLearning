import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees=[];

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit(){
    this._employeeservice.getEmployees()
    .subscribe(data => this.employees=data);
  }

}
