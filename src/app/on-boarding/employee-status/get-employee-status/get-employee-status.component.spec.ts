import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeStatusComponent } from './get-employee-status.component';

describe('GetEmployeeStatusComponent', () => {
  let component: GetEmployeeStatusComponent;
  let fixture: ComponentFixture<GetEmployeeStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeeStatusComponent]
    });
    fixture = TestBed.createComponent(GetEmployeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
