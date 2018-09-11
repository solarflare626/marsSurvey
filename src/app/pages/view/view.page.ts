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
  constructor(private navCtrl:NavController,private surveyService:SurveyService) { 
    this.nSurveys = surveyService.nSurveys;
  }

  ngOnInit() {
  }

  view(i){
    alert(i);
  }

  back(){
    this.navCtrl.goBack();
  }

}
