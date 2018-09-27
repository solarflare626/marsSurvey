import { Component } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nSurveys:Number=0;

  constructor(public surveyService:SurveyService, private router: Router,private navCtrl:NavController){
      this.nSurveys = surveyService.nSurveys;
  }

  take(){
    this.navCtrl.navigateForward('/survey');
  }

  
  view(){
    this.navCtrl.navigateForward('/view');
  }
}
