import { TestBed } from '@angular/core/testing';

import { UsergGuard } from './userg.guard';

describe('UsergGuard', () => {
  let guard: UsergGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsergGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
