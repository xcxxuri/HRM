import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeStatusComponent } from './delete-employee-status.component';

describe('DeleteEmployeeStatusComponent', () => {
  let component: DeleteEmployeeStatusComponent;
  let fixture: ComponentFixture<DeleteEmployeeStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmployeeStatusComponent]
    });
    fixture = TestBed.createComponent(DeleteEmployeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
