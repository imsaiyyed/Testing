import { Component, OnInit } from '@angular/core';
import { EmpService } from '../_services/emp.service'
import { Employee } from '../_models/employee'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  employee:Employee;
  constructor(private empService:EmpService) {
   
    this.employee=new Employee();
    this.employee.username="";
    this.employee.password="";
   }

  ngOnInit() {
  }
  userLogIn(){
    if(this.employee.username!="" && this.employee.password!="")
    {
      this.empService.logIn(this.employee);
    }
  }
}
