import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeCategoryComponent } from './delete-employee-category.component';

describe('DeleteEmployeeCategoryComponent', () => {
  let component: DeleteEmployeeCategoryComponent;
  let fixture: ComponentFixture<DeleteEmployeeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmployeeCategoryComponent]
    });
    fixture = TestBed.createComponent(DeleteEmployeeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
