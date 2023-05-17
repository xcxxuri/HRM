import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubmissionStatusComponent } from './get-submission-status.component';

describe('GetSubmissionStatusComponent', () => {
  let component: GetSubmissionStatusComponent;
  let fixture: ComponentFixture<GetSubmissionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSubmissionStatusComponent]
    });
    fixture = TestBed.createComponent(GetSubmissionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
