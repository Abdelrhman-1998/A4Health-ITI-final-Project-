import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialtiesComponent } from './add-specialties.component';

describe('AddSpecialtiesComponent', () => {
  let component: AddSpecialtiesComponent;
  let fixture: ComponentFixture<AddSpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialtiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
