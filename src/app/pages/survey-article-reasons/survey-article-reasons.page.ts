import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
@Component({
  selector: 'app-survey-article-reasons',
  templateUrl: './survey-article-reasons.page.html',
  styleUrls: ['./survey-article-reasons.page.scss'],
})
export class SurveyArticleReasonsPage implements OnInit {
  article;
  survey;
  status;
  constructor(private nav:NavController,private modalCtrl:ModalController) { 
    
  }

  ngOnInit() {
    
  }
  submit(){
    setTimeout(() => {
      this.status.submitted = true;
      this.survey['article'+this.article.id] =true;
      this.modalCtrl.dismiss();
    }, 0);
  }
  back()
  {
    this.modalCtrl.dismiss();
  }
}
