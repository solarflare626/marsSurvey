import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'view', loadChildren: './pages/view/view.module#ViewPageModule' },
  { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' },
  { path: 'SurveyArticle', loadChildren: './pages/survey-article/survey-article.module#SurveyArticlePageModule' },
  { path: 'SurveyArticleReasons', loadChildren: './pages/survey-article-reasons/survey-article-reasons.module#SurveyArticleReasonsPageModule' },
  { path: 'ViewSurvey', loadChildren: './pages/view-survey/view-survey.module#ViewSurveyPageModule' },
  { path: 'ViewSurveyReason', loadChildren: './pages/view-survey-reason/view-survey-reason.module#ViewSurveyReasonPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
