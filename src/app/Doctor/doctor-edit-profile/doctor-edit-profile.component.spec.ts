import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditProfileComponent } from './doctor-edit-profile.component';

describe('DoctorEditProfileComponent', () => {
  let component: DoctorEditProfileComponent;
  let fixture: ComponentFixture<DoctorEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
