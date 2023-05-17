import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobRequirementComponent } from './delete-job-requirement.component';

describe('DeleteJobRequirementComponent', () => {
  let component: DeleteJobRequirementComponent;
  let fixture: ComponentFixture<DeleteJobRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteJobRequirementComponent]
    });
    fixture = TestBed.createComponent(DeleteJobRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
