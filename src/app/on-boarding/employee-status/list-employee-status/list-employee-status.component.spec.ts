import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeStatusComponent } from './list-employee-status.component';

describe('ListEmployeeStatusComponent', () => {
  let component: ListEmployeeStatusComponent;
  let fixture: ComponentFixture<ListEmployeeStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeeStatusComponent]
    });
    fixture = TestBed.createComponent(ListEmployeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
