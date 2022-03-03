import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWithDoctorComponent } from './book-with-doctor.component';

describe('BookWithDoctorComponent', () => {
  let component: BookWithDoctorComponent;
  let fixture: ComponentFixture<BookWithDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookWithDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWithDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
