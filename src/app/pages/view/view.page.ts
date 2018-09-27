import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Survey } from '../../classes/survey';
import { SurveyService } from '../../services/survey.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  constructor(private navCtrl:NavController,private surveyService:SurveyService,public alertController: AlertController) { 
  
  }

  ngOnInit() {
  }

  view(i){
    console.log(this.surveyService.surveys[i-1]);
  }

  back(){
    this.navCtrl.goBack();
  }

  async presentClearConfirm() {
    const alert = await this.alertController.create({
      header: 'Deleting Data',
      message: 'Are you sure you want to delete all data?',
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
            this.surveyService.clear();
          }
        }
      ]
    });

    await alert.present();
  }
  clear(){
    this.presentClearConfirm();
  }
}
