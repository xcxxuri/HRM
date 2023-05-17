import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterviewerComponent } from './add-interviewer.component';

describe('AddInterviewerComponent', () => {
  let component: AddInterviewerComponent;
  let fixture: ComponentFixture<AddInterviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInterviewerComponent]
    });
    fixture = TestBed.createComponent(AddInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
