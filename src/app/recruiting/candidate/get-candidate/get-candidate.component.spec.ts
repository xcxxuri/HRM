import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCandidateComponent } from './get-candidate.component';

describe('GetCandidateComponent', () => {
  let component: GetCandidateComponent;
  let fixture: ComponentFixture<GetCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCandidateComponent]
    });
    fixture = TestBed.createComponent(GetCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
