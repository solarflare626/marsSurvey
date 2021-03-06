import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewSurveyPage } from './view-survey.page';
import { ViewSurveyReasonPageModule } from '../view-survey-reason/view-survey-reason.module';
const routes: Routes = [
  {
    path: 'view-survey',
    component: ViewSurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSurveyReasonPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewSurveyPage]
})
export class ViewSurveyPageModule {}
