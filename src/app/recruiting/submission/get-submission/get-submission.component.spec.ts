import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubmissionComponent } from './get-submission.component';

describe('GetSubmissionComponent', () => {
  let component: GetSubmissionComponent;
  let fixture: ComponentFixture<GetSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSubmissionComponent]
    });
    fixture = TestBed.createComponent(GetSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
