import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageProfileComponent } from './user-manage-profile.component';

describe('UserManageProfileComponent', () => {
  let component: UserManageProfileComponent;
  let fixture: ComponentFixture<UserManageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManageProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
