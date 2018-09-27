import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SurveyService } from '../../services/survey.service';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-view-survey-popover',
  templateUrl: './view-survey-popover.component.html',
  styleUrls: ['./view-survey-popover.component.scss']
})
export class ViewSurveyPopoverComponent implements OnInit {
  survey;
  status;
  constructor(private surveyService:SurveyService,public alertController: AlertController,private popoverController: PopoverController) { }
  delete(){
    console.log("de");
    this.presentDeleteConfirm();
  }
  async presentDeleteConfirm() {
    const alertPrompt = await this.alertController.create({
      header: 'Deleting Survey',
      subHeader: 'Are you sure you want to delete this survey?',
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
              this.surveyService.delete(this.survey);
              this.status.deleted = true;
            }else{
              this.presentAlert({header:'Invalid Input',message:'Data not deleted.',buttons: ['OK']})
            }
            this.popoverController.dismiss();
          }
        }
      ]
    });

    await alertPrompt.present();
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

  ngOnInit() {
  }

}
