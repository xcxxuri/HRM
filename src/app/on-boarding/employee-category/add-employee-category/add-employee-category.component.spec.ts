import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeCategoryComponent } from './add-employee-category.component';

describe('AddEmployeeCategoryComponent', () => {
  let component: AddEmployeeCategoryComponent;
  let fixture: ComponentFixture<AddEmployeeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeCategoryComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
