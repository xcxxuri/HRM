import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecruiterComponent } from './get-recruiter.component';

describe('GetRecruiterComponent', () => {
  let component: GetRecruiterComponent;
  let fixture: ComponentFixture<GetRecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRecruiterComponent]
    });
    fixture = TestBed.createComponent(GetRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
