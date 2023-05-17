import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJobRequirementComponent } from './get-job-requirement.component';

describe('GetJobRequirementComponent', () => {
  let component: GetJobRequirementComponent;
  let fixture: ComponentFixture<GetJobRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetJobRequirementComponent]
    });
    fixture = TestBed.createComponent(GetJobRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
