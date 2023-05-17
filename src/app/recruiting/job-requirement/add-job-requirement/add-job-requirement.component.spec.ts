import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobRequirementComponent } from './add-job-requirement.component';

describe('AddJobRequirementComponent', () => {
  let component: AddJobRequirementComponent;
  let fixture: ComponentFixture<AddJobRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobRequirementComponent]
    });
    fixture = TestBed.createComponent(AddJobRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
