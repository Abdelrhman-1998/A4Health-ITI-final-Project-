import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpasswordComponent } from './doctorpassword.component';

describe('DoctorpasswordComponent', () => {
  let component: DoctorpasswordComponent;
  let fixture: ComponentFixture<DoctorpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
