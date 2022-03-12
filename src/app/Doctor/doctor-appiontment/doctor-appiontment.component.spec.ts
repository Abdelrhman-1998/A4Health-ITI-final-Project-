import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppiontmentComponent } from './doctor-appiontment.component';

describe('DoctorAppiontmentComponent', () => {
  let component: DoctorAppiontmentComponent;
  let fixture: ComponentFixture<DoctorAppiontmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppiontmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppiontmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
