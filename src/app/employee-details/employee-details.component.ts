import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employees } from '../data';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
employee;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employee = Employees[+params.get('empId')];
  });
}
}

