import { TestBed } from '@angular/core/testing';

import { LoginHospitalsService } from './login-hospitals.service';

describe('LoginHospitalsService', () => {
  let service: LoginHospitalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginHospitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
