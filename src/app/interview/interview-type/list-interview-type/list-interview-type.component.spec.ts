import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterviewTypeComponent } from './list-interview-type.component';

describe('ListInterviewTypeComponent', () => {
  let component: ListInterviewTypeComponent;
  let fixture: ComponentFixture<ListInterviewTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInterviewTypeComponent]
    });
    fixture = TestBed.createComponent(ListInterviewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
