import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterviewFeedbackComponent } from './get-interview-feedback.component';

describe('GetInterviewFeedbackComponent', () => {
  let component: GetInterviewFeedbackComponent;
  let fixture: ComponentFixture<GetInterviewFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInterviewFeedbackComponent]
    });
    fixture = TestBed.createComponent(GetInterviewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
