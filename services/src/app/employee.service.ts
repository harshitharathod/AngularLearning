import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(){
    return [
      {"id":1, "name":"Harshitha", "age":23},
      {"id":2, "name":"Vishnu", "age":23},
      {"id":3, "name":"Jahnavi", "age":22}
    ]
  }
  

  constructor() { }
}
