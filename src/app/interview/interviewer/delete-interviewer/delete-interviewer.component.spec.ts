import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterviewerComponent } from './delete-interviewer.component';

describe('DeleteInterviewerComponent', () => {
  let component: DeleteInterviewerComponent;
  let fixture: ComponentFixture<DeleteInterviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInterviewerComponent]
    });
    fixture = TestBed.createComponent(DeleteInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
