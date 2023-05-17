import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterviewTypeComponent } from './get-interview-type.component';

describe('GetInterviewTypeComponent', () => {
  let component: GetInterviewTypeComponent;
  let fixture: ComponentFixture<GetInterviewTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInterviewTypeComponent]
    });
    fixture = TestBed.createComponent(GetInterviewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
