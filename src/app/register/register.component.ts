import { Component, OnInit } from '@angular/core';
import { EmpService } from '../_services/emp.service'
import { Employee } from '../_models/employee'
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee:Employee;
  constructor(private empService:EmpService,private route:Router) {
    this.employee=new Employee();
    this.employee.username="";
    this.employee.password="";
    this.employee.city="";
   }

  ngOnInit() {
  }
  addUser(){
    if(this.employee.username!="" && this.employee.password!="" && this.employee.city!="")
    {
      this.empService.addUser(this.employee);
    }
  }

}
