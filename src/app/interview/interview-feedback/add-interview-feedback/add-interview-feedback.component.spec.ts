import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterviewFeedbackComponent } from './add-interview-feedback.component';

describe('AddInterviewFeedbackComponent', () => {
  let component: AddInterviewFeedbackComponent;
  let fixture: ComponentFixture<AddInterviewFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInterviewFeedbackComponent]
    });
    fixture = TestBed.createComponent(AddInterviewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
