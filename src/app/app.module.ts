import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { SQLite} from '@ionic-native/sqlite/ngx';
import { SQLiteMock } from './classes/sqlite-mock';
import { SurveyService } from './services/survey.service';
import { ArticleService } from './services/article.service';
import { ViewSurveyPopoverComponent } from './components/view-survey-popover/view-survey-popover.component';
import { File } from '@ionic-native/file/ngx';
@NgModule({
  declarations: [AppComponent, ViewSurveyPopoverComponent],
  entryComponents: [ViewSurveyPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLiteMock,
    ArticleService,
    SurveyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
