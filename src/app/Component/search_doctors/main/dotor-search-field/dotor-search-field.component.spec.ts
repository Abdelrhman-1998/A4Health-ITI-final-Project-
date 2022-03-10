import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotorSearchFieldComponent } from './dotor-search-field.component';
describe('DotorSearchFieldComponent', () => {
  let component: DotorSearchFieldComponent;
  let fixture: ComponentFixture<DotorSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotorSearchFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotorSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
