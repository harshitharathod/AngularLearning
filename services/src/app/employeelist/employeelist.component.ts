import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private _employeeservice : EmployeeService) { }
  public employees=[];
  

  ngOnInit() {
    this._employeeservice.getEmployees()
      .subscribe(data => this.employees=data);
  }

}
