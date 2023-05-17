import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitingLayoutComponent } from './recruiting-layout.component';

describe('RecruitingLayoutComponent', () => {
  let component: RecruitingLayoutComponent;
  let fixture: ComponentFixture<RecruitingLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitingLayoutComponent]
    });
    fixture = TestBed.createComponent(RecruitingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
