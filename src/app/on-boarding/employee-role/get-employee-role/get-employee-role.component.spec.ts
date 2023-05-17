import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeRoleComponent } from './get-employee-role.component';

describe('GetEmployeeRoleComponent', () => {
  let component: GetEmployeeRoleComponent;
  let fixture: ComponentFixture<GetEmployeeRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeeRoleComponent]
    });
    fixture = TestBed.createComponent(GetEmployeeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
