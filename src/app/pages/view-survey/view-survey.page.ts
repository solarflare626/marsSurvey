import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Article } from '../../classes/article';
import { ArticleService } from '../../services/article.service';
import { Survey } from '../../classes/survey';
import {ViewSurveyReasonPage} from '../view-survey-reason/view-survey-reason.page';
import { PopoverController } from '@ionic/angular';
import { ViewSurveyPopoverComponent } from '../../components/view-survey-popover/view-survey-popover.component'
@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.page.html',
  styleUrls: ['./view-survey.page.scss'],
})
export class ViewSurveyPage implements OnInit {
  articles:Array<Article> = [];
  survey:Survey;
  status:any;
  constructor(public popoverController: PopoverController,private navCtrl:NavController,private modalCtrl:ModalController,private articleService:ArticleService) { 
    this.articles = this.articleService.articles;
    this.status = {deleted:false};
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ViewSurveyPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {survey:this.survey,status:this.status}
    });
    popover.onDidDismiss().then((data)=>{
      if(this.status.deleted){
        this.modalCtrl.dismiss();
      }
    });
    return await popover.present();
  }
  reasons(article){
    this.presentModal(article);
  }
  ngOnInit() {
  }
  back(){
    this.modalCtrl.dismiss();
  }
  async presentModal(article) {
    const modal = await this.modalCtrl.create({
      component: ViewSurveyReasonPage,
      componentProps: {article: article, survey:this.survey }
    });
    
    return await modal.present();
    
  }
}
