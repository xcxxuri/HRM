import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubmissionComponent } from './delete-submission.component';

describe('DeleteSubmissionComponent', () => {
  let component: DeleteSubmissionComponent;
  let fixture: ComponentFixture<DeleteSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSubmissionComponent]
    });
    fixture = TestBed.createComponent(DeleteSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
