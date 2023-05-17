import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewTypeComponent } from './update-interview-type.component';

describe('UpdateInterviewTypeComponent', () => {
  let component: UpdateInterviewTypeComponent;
  let fixture: ComponentFixture<UpdateInterviewTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInterviewTypeComponent]
    });
    fixture = TestBed.createComponent(UpdateInterviewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
