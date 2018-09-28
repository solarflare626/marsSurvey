import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Survey } from '../../classes/survey';
import { SurveyService } from '../../services/survey.service';
import { AlertController } from '@ionic/angular';
import { ViewSurveyPage } from '../view-survey/view-survey.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  constructor(private navCtrl:NavController,private surveyService:SurveyService,public alertController: AlertController,public modalController: ModalController) { 
    
  }
 
  download(){ 
    this.navCtrl.navigateForward('/export');
  }
   
  ngOnInit() {
  }

  view(i){
    this.presentModal(this.surveyService.surveys[i-1]);
  }

  back(){
    this.navCtrl.goBack();
  }

  async presentModal(survey) {
    const modal = await this.modalController.create({
      component: ViewSurveyPage,
      componentProps: { survey:survey }
    });
    
    return await modal.present();
    
  }

  async presentClearConfirm() {
    const alertPrompt = await this.alertController.create({
      header: 'Deleting Data',
      subHeader: 'Are you sure you want to delete all data?',
      message: 'Please enter "DELETE" to confirm delete.',
      inputs: [
        {
          name: 'delete',
          type: 'text',
          placeholder: 'DELETE',
          value: '',
        }
      ],
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
          handler: (data) => {
            if(data.delete == 'DELETE'){
              this.surveyService.clear();
            }else{
              this.presentAlert({header:'Invalid Input',message:'Data not deleted.',buttons: ['OK']})
            }
          }
        }
      ]
    });

    await alertPrompt.present();
  }
  clear(){
    this.presentClearConfirm();
  }

  async presentAlert(options:any ={
    header: 'Alert',
    subHeader: null,
    message: 'This is an alert message.',
    buttons: ['OK']
 }) {
    const alert = await this.alertController.create({
      header: options.header,
      subHeader: options.subHeader,
      message: options.message,
      buttons: options.buttons
    });

    await alert.present();
  }
}
