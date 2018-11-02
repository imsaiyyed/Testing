import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component'
import { LogInComponent } from './log-in/log-in.component'
import { RegisterComponent } from './register/register.component'

export const routes: Routes = [
  {
    path:'login',
    component:LogInComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
