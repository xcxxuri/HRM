import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeCategoryComponent } from './get-employee-category.component';

describe('GetEmployeeCategoryComponent', () => {
  let component: GetEmployeeCategoryComponent;
  let fixture: ComponentFixture<GetEmployeeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeeCategoryComponent]
    });
    fixture = TestBed.createComponent(GetEmployeeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
