import { Component, OnInit } from '@angular/core';
import { Employees } from '../data';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
 employees = Employees;
  constructor() { }

  ngOnInit() {
  }

}
