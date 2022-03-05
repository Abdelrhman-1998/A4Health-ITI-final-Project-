import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetDoctorsComponent } from './meet-doctors.component';

describe('MeetDoctorsComponent', () => {
  let component: MeetDoctorsComponent;
  let fixture: ComponentFixture<MeetDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
