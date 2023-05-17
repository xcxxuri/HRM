import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewFeedbackComponent } from './update-interview-feedback.component';

describe('UpdateInterviewFeedbackComponent', () => {
  let component: UpdateInterviewFeedbackComponent;
  let fixture: ComponentFixture<UpdateInterviewFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInterviewFeedbackComponent]
    });
    fixture = TestBed.createComponent(UpdateInterviewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
