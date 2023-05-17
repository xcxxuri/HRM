import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterviewerComponent } from './get-interviewer.component';

describe('GetInterviewerComponent', () => {
  let component: GetInterviewerComponent;
  let fixture: ComponentFixture<GetInterviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInterviewerComponent]
    });
    fixture = TestBed.createComponent(GetInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
