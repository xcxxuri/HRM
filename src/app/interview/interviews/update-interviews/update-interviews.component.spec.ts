import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewsComponent } from './update-interviews.component';

describe('UpdateInterviewsComponent', () => {
  let component: UpdateInterviewsComponent;
  let fixture: ComponentFixture<UpdateInterviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInterviewsComponent]
    });
    fixture = TestBed.createComponent(UpdateInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
