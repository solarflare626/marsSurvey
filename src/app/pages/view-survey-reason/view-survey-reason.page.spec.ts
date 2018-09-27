import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurveyReasonPage } from './view-survey-reason.page';

describe('ViewSurveyReasonPage', () => {
  let component: ViewSurveyReasonPage;
  let fixture: ComponentFixture<ViewSurveyReasonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSurveyReasonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurveyReasonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
