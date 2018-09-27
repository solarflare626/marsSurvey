import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPage } from './view.page';
import { ViewSurveyPageModule } from '../view-survey/view-survey.module';
const routes: Routes = [
  {
    path: '',
    component: ViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSurveyPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewPage]
})
export class ViewPageModule {}
