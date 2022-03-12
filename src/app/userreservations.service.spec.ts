import { TestBed } from '@angular/core/testing';

import { UserreservationsService } from './userreservations.service';

describe('UserreservationsService', () => {
  let service: UserreservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserreservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
