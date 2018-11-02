import { Component, OnInit } from '@angular/core';
import { EmpService } from '../_services/emp.service'
import { Employee } from '../_models/employee'
import { Router } from '@angular/router'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeList:Employee[]=[];

  constructor(private empService:EmpService,private route:Router) {
    this.employeeList=empService.employeeList;
   }

  ngOnInit() {
  }
  addUser(){
    this.route.navigate(['register']);
  }
  deleteUser(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.name;
    var value = idAttr.nodeValue;
    this.empService.deleteUser(value)
    console.log(value);
  }

}
