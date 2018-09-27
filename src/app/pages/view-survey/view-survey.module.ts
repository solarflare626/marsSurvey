import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewSurveyPage } from './view-survey.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ViewSurveyPage]
})
export class ViewSurveyPageModule {}
