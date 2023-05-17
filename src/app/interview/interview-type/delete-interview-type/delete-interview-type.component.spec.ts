import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterviewTypeComponent } from './delete-interview-type.component';

describe('DeleteInterviewTypeComponent', () => {
  let component: DeleteInterviewTypeComponent;
  let fixture: ComponentFixture<DeleteInterviewTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInterviewTypeComponent]
    });
    fixture = TestBed.createComponent(DeleteInterviewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
