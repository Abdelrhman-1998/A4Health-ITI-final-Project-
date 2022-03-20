import { TestBed } from '@angular/core/testing';

import { DoctorguardGuard } from './doctorguard.guard';

describe('DoctorguardGuard', () => {
  let guard: DoctorguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
