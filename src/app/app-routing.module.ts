import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'take', loadChildren: './pages/take/take.module#TakePageModule' },
  { path: 'view', loadChildren: './pages/view/view.module#ViewPageModule' },
  { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
