import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmissionStatusComponent } from './list-submission-status.component';

describe('ListSubmissionStatusComponent', () => {
  let component: ListSubmissionStatusComponent;
  let fixture: ComponentFixture<ListSubmissionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubmissionStatusComponent]
    });
    fixture = TestBed.createComponent(ListSubmissionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
