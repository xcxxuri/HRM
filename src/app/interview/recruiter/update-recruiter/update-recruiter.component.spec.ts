import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecruiterComponent } from './update-recruiter.component';

describe('UpdateRecruiterComponent', () => {
  let component: UpdateRecruiterComponent;
  let fixture: ComponentFixture<UpdateRecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRecruiterComponent]
    });
    fixture = TestBed.createComponent(UpdateRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
