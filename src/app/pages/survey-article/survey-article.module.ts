import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyArticlePage } from './survey-article.page';
import { SurveyArticleReasonsPageModule } from '../survey-article-reasons/survey-article-reasons.module';
const routes: Routes = [
  {
    path: 'survey-article',
    component: SurveyArticlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyArticleReasonsPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyArticlePage]
})
export class SurveyArticlePageModule {}
