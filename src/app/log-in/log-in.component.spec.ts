import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in.component';
import { EmpService } from "../_services/emp.service";
import { Router } from "@angular/router"
import { RouterTestingModule } from '@angular/router/testing';
import { Employee } from '../_models/employee';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let employee:Employee;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  } 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      providers:[EmpService,RouterTestingModule,{provide:Router,useValue: mockRouter}],
      declarations: [ LogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LogIn Component', () => {
    expect(component).toBeTruthy();
  });

  it('should create Service',inject([EmpService],(empService:EmpService) => {
    expect(empService).toBeTruthy();
  }));

  it('should have login method in service',inject([EmpService],(empService:EmpService) => {
    expect(empService.logIn).toBeTruthy();
  }));

  it('should have list of users',inject([EmpService],(empService:EmpService) => {
    expect(empService.employeeList).toBeTruthy();
  }));

  /*it('should have login method in service',inject([EmpService],(empService:EmpService) => {
    employee=new Employee();
    employee.username="ismail";
    employee.password="12345";
    empService.logIn(employee);
    expect().toBeTruthy();
  }));*/

  xit('should have dummy data', () => {
    expect(component).toBeTruthy();
  });
  

});
