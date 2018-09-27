import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurveyPopoverComponent } from './view-survey-popover.component';

describe('ViewSurveyPopoverComponent', () => {
  let component: ViewSurveyPopoverComponent;
  let fixture: ComponentFixture<ViewSurveyPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurveyPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurveyPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
