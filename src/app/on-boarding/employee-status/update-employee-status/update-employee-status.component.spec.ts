import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeStatusComponent } from './update-employee-status.component';

describe('UpdateEmployeeStatusComponent', () => {
  let component: UpdateEmployeeStatusComponent;
  let fixture: ComponentFixture<UpdateEmployeeStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeStatusComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
