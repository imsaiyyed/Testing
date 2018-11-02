import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee'
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  employeeList:Employee[]=[];

  constructor(private route:Router) {
    this.employeeList.push({
      username:'ismail',
      password:'12345',
      city:'Nasik'
    });
   }

  logIn(employee:Employee){
    for (let emp of this.employeeList) {
      if(emp.username==employee.username)
      {
        if(emp.password==employee.password)
        {
          this.route.navigate(['employees']);
        }
      }
      else{
        localStorage.setItem("errorMsg","Not a valid user");
      }
  }
  }
  addUser(employee:Employee)
  {
    this.employeeList.push(employee);
    this.route.navigate(['employees']);
  }
  deleteUser(username:string){
    for (let i=0;i<this.employeeList.length;i++) {
      if(this.employeeList[i].username==username)
      {
        this.employeeList.splice(i,1);
        this.route.navigate(['employees']);

      }
    }
  }
}
