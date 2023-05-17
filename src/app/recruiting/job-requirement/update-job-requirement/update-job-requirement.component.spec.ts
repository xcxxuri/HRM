import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobRequirementComponent } from './update-job-requirement.component';

describe('UpdateJobRequirementComponent', () => {
  let component: UpdateJobRequirementComponent;
  let fixture: ComponentFixture<UpdateJobRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateJobRequirementComponent]
    });
    fixture = TestBed.createComponent(UpdateJobRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
