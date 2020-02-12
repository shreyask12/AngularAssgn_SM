import { TestBed } from '@angular/core/testing';

import { SalaryformsService } from './salaryforms.service';

describe('SalaryformsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaryformsService = TestBed.get(SalaryformsService);
    expect(service).toBeTruthy();
  });
});
