import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingLayoutComponent } from './on-boarding-layout.component';

describe('OnBoardingLayoutComponent', () => {
  let component: OnBoardingLayoutComponent;
  let fixture: ComponentFixture<OnBoardingLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnBoardingLayoutComponent]
    });
    fixture = TestBed.createComponent(OnBoardingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
