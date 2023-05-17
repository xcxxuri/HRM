import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubmissionComponent } from './update-submission.component';

describe('UpdateSubmissionComponent', () => {
  let component: UpdateSubmissionComponent;
  let fixture: ComponentFixture<UpdateSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSubmissionComponent]
    });
    fixture = TestBed.createComponent(UpdateSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
