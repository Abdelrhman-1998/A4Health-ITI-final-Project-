import { TestBed } from '@angular/core/testing';

import { PatientguardGuard } from './patientguard.guard';

describe('PatientguardGuard', () => {
  let guard: PatientguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
