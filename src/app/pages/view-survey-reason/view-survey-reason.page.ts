import { Component, OnInit } from '@angular/core';
import { Survey } from '../../classes/survey';
import { Article } from '../../classes/article';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-view-survey-reason',
  templateUrl: './view-survey-reason.page.html',
  styleUrls: ['./view-survey-reason.page.scss'],
})
export class ViewSurveyReasonPage implements OnInit {
  survey: Survey;
  article : Article;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  back(){
    this.modalCtrl.dismiss();
  }
}
