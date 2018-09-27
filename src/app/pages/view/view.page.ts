import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Survey } from '../../classes/survey';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  nSurveys:any = 0;
  Arr = Array;
  surveys: Array<Survey> = [];
  constructor(private navCtrl:NavController,private surveyService:SurveyService) { 
    this.nSurveys = surveyService.nSurveys;
    this.surveys =this.surveyService.surveys;
    console.log(this.surveys);
  }

  ngOnInit() {
  }

  randomizer(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  view(i){
    alert(i);
    console.log(this.surveys[i-1]);
    console.log(this.randomizer());
  }

  back(){
    this.navCtrl.goBack();
  }

}
