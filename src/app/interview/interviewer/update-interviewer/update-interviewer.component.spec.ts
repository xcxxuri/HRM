import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewerComponent } from './update-interviewer.component';

describe('UpdateInterviewerComponent', () => {
  let component: UpdateInterviewerComponent;
  let fixture: ComponentFixture<UpdateInterviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInterviewerComponent]
    });
    fixture = TestBed.createComponent(UpdateInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
