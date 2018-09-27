import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyArticleReasonsPage } from './survey-article-reasons.page';

describe('SurveyArticleReasonsPage', () => {
  let component: SurveyArticleReasonsPage;
  let fixture: ComponentFixture<SurveyArticleReasonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyArticleReasonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyArticleReasonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
