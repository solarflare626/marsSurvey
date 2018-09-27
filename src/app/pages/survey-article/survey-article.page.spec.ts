import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyArticlePage } from './survey-article.page';

describe('SurveyArticlePage', () => {
  let component: SurveyArticlePage;
  let fixture: ComponentFixture<SurveyArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyArticlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
