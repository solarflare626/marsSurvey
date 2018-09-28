import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { SurveyArticleReasonsPage } from '../survey-article-reasons/survey-article-reasons.page';
@Component({
  selector: 'app-survey-article',
  templateUrl: './survey-article.page.html',
  styleUrls: ['./survey-article.page.scss'],
})
export class SurveyArticlePage implements OnInit {
  article;
  survey;
  status:any;
  constructor(private nav:NavController,private modalCtrl:ModalController) {
    this.status = {submitted:false};
   }

  ngOnInit() {
  }

  
  back()
  {
    this.modalCtrl.dismiss();
  }

  markFake(){
    this.presentModal();
    this.back();
  }
  markNotFake(){
    this.survey['article'+this.article.id] = false;
    for(let i = 1; i<= 14;i++){
      this.survey['article'+this.article.id+'_'+i] = false;
    }
    this.survey['article'+this.article.id+'_others'] = '';
    this.back();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SurveyArticleReasonsPage,
      componentProps: { article: this.article,survey:this.survey,status:this.status }
    });
    modal.onDidDismiss().then(() =>{
      if(this.status.submitted){
        this.back();
      }
    });
    return await modal.present();
  }
}
