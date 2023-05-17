import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterviewFeedbackComponent } from './delete-interview-feedback.component';

describe('DeleteInterviewFeedbackComponent', () => {
  let component: DeleteInterviewFeedbackComponent;
  let fixture: ComponentFixture<DeleteInterviewFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInterviewFeedbackComponent]
    });
    fixture = TestBed.createComponent(DeleteInterviewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
