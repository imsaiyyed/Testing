import { TestBed } from '@angular/core/testing';

import { EmpService } from './emp.service';

describe('EmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: EmpService = TestBed.get(EmpService);
    expect(service).toBeTruthy();
  });
});
