import { Component, OnInit } from '@angular/core';
import { Article } from '../../classes/article';
import { ArticleService } from '../../services/article.service';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SurveyArticlePage } from '../survey-article/survey-article.page';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../classes/survey';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  articles:Array<Article> = [];
  survey:Survey;
  
 
  constructor( public alertController: AlertController,private surveyService:SurveyService,public modalController: ModalController,private navCtrl:NavController,private articleService:ArticleService) {
    this.articles = this.articleService.articles;
    this.survey = new Survey();
    
   }

  ngOnInit() {
  }

  checkArticle(article){
    return ;
  }

  submit(){
    this.presentSubmitConfirm();
  }

  async presentSubmitConfirm() {
    const alertPrompt = await this.alertController.create({
      header: 'Submit Survey',
      message: 'Are you sure you want to submit the survey?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancelled');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.surveyService.insert(this.survey);
            this.back();
          }
        }
      ]
    });

    await alertPrompt.present();
  }

  back(){
    this.navCtrl.goBack();
  }
  read(article:Article){
    this.presentModal(article);
  }


  async presentModal(article) {
    const modal = await this.modalController.create({
      component: SurveyArticlePage,
      componentProps: { article: article,survey:this.survey }
    });
    
    return await modal.present();
    
  }

}
