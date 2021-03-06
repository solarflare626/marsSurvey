import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SurveyArticlePageModule } from '../survey-article/survey-article.module';
import { IonicModule } from '@ionic/angular';

import { SurveyPage } from './survey.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyPage
  }
];

@NgModule({
  imports: [
    SurveyArticlePageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
