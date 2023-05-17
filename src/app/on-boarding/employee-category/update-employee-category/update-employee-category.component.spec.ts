import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeCategoryComponent } from './update-employee-category.component';

describe('UpdateEmployeeCategoryComponent', () => {
  let component: UpdateEmployeeCategoryComponent;
  let fixture: ComponentFixture<UpdateEmployeeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeCategoryComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
