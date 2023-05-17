import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInterviewsComponent } from './delete-interviews.component';

describe('DeleteInterviewsComponent', () => {
  let component: DeleteInterviewsComponent;
  let fixture: ComponentFixture<DeleteInterviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteInterviewsComponent]
    });
    fixture = TestBed.createComponent(DeleteInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
