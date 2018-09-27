import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyArticleReasonsPage } from './survey-article-reasons.page';


const routes: Routes = [
  {
    path: 'survey-article-reasons',
    component: SurveyArticleReasonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyArticleReasonsPage]
})
export class SurveyArticleReasonsPageModule {}
