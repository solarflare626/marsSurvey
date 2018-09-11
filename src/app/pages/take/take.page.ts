import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Survey } from '../../classes/survey';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.page.html',
  styleUrls: ['./take.page.scss'],
})
export class TakePage implements OnInit {
  survey:Survey;
  isSubmitted: any = false;
  constructor(private navCtrl:NavController, private surveyService:SurveyService) { 
    this.survey = new Survey();
  }
  updateQ1(event:Event){
    if(this.survey.q1_none == true){
      this.survey.q1_none =false;
    }
  }

  updateQ1None(event:Event){
    if(this.survey.q1_none == true){
      this.survey.q1_1 = false;
      this.survey.q1_2 = false;
      this.survey.q1_3 = false;
      this.survey.q1_4 = false;
      let data = this.survey;
      setTimeout((val)=>{
        data.q1_none=true;
      },100);
    }
  }
  
  ngOnInit() {
  }

  submit(){
    this.isSubmitted = true;
    this.surveyService.insert(this.survey);
  }

  back(){
    this.navCtrl.goBack();
  }

}
