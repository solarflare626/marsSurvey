import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Article } from '../../classes/article';
import { ArticleService } from '../../services/article.service';
import { Survey } from '../../classes/survey';
@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.page.html',
  styleUrls: ['./view-survey.page.scss'],
})
export class ViewSurveyPage implements OnInit {
  articles:Array<Article> = [];
  survey:Survey;
  constructor(private navCtrl:NavController,private modalCtrl:ModalController,private articleService:ArticleService) { 
    this.articles = this.articleService.articles;
    
  }

  ngOnInit() {
    console.log(this.survey);
  }
  back(){
    this.modalCtrl.dismiss();
  }

}
