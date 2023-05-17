import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmissionComponent } from './list-submission.component';

describe('ListSubmissionComponent', () => {
  let component: ListSubmissionComponent;
  let fixture: ComponentFixture<ListSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubmissionComponent]
    });
    fixture = TestBed.createComponent(ListSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
