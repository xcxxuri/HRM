import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubmissionStatusComponent } from './delete-submission-status.component';

describe('DeleteSubmissionStatusComponent', () => {
  let component: DeleteSubmissionStatusComponent;
  let fixture: ComponentFixture<DeleteSubmissionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSubmissionStatusComponent]
    });
    fixture = TestBed.createComponent(DeleteSubmissionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
