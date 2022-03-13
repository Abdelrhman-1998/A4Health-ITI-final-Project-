import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeadbackComponent } from './user-feadback.component';

describe('UserFeadbackComponent', () => {
  let component: UserFeadbackComponent;
  let fixture: ComponentFixture<UserFeadbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeadbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeadbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
