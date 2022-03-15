import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOffersComponent } from './doctor-offers.component';

describe('DoctorOffersComponent', () => {
  let component: DoctorOffersComponent;
  let fixture: ComponentFixture<DoctorOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
