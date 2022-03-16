import { TestBed } from '@angular/core/testing';

import { GlobaltokenService } from './globaltoken.service';

describe('GlobaltokenService', () => {
  let service: GlobaltokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaltokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
