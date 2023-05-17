import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterviewsComponent } from './get-interviews.component';

describe('GetInterviewsComponent', () => {
  let component: GetInterviewsComponent;
  let fixture: ComponentFixture<GetInterviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInterviewsComponent]
    });
    fixture = TestBed.createComponent(GetInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
