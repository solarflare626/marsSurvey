import { Component, OnInit } from '@angular/core';
import { NavController, Platform,AlertController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { SurveyService } from '../../services/survey.service';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-export',
  templateUrl: './export.page.html',
  styleUrls: ['./export.page.scss'],
})
export class ExportPage implements OnInit {
  items = [];
  savedCurrentNativeURLs = [];
  savedCurrentNativeNames = [];
  filename="surveyone_data_"+Date.now()+".json";
  filepath:string;
  currentDir:string;
  currentName:string;
  constructor(private surveyService:SurveyService,public alertController: AlertController,public navCtrl: NavController, public fileNavigator: File, public plt: Platform) {
    const ROOT_DIRECTORY = this.fileNavigator.externalRootDirectory.slice(0, -1);
    this.currentDir=ROOT_DIRECTORY;
    this.currentName='';
    this.generatePath();
    plt.ready()
      .then(() => {
        this.listDir(ROOT_DIRECTORY, '');
    });
   }

   handleError = error => {
    alert("error reading: "+JSON.stringify(error));
  };
   
   listDir(path, dirName){
    this.fileNavigator
      .listDir(path, dirName)
      .then(entries => {
        this.items = entries;
      })
      .catch(this.handleError);
  };

  goDown = item => {
    const parentNativeURL = item.nativeURL.replace(item.name+'/', "");
    this.savedCurrentNativeURLs.push(this.currentDir);
    this.savedCurrentNativeNames.push(this.currentName);
    this.currentDir = parentNativeURL;
    this.currentName = item.name;
    this.generatePath();
    this.listDir(this.currentDir,this.currentName);
  };
  goUp = () => {
    if(this.savedCurrentNativeURLs.length > 0){
      this.currentDir = this.savedCurrentNativeURLs.pop();
      this.currentName = this.savedCurrentNativeNames.pop();
      this.generatePath();
      this.listDir(this.currentDir, this.currentName);
    }
  };

  generatePath(){
    this.filepath= this.currentDir+this.currentName+'/';
  }
  save(){
    this.presentExportConfirm();
  }

  async presentExportConfirm() {
    const alertPrompt = await this.alertController.create({
      header: 'Export Data',
      message: 'Do you want to export your data?.',
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
            this.fileNavigator.writeFile(this.filepath,this.filename,JSON.stringify(this.surveyService.surveys))
            .then(()=>{
              this.presentAlert({header:'Success!',message:'Successfully saved data.',buttons: ['OK']})
              this.navCtrl.goBack();
            }).catch((e)=>{
              this.presentAlert({header:'Error',message:JSON.stringify(e),buttons: ['OK']})
            });
            
            
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
