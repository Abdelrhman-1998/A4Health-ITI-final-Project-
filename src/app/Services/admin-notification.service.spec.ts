import { TestBed } from '@angular/core/testing';

import { AdminNotificationService } from './admin-notification.service';

describe('AdminNotificationService', () => {
  let service: AdminNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
