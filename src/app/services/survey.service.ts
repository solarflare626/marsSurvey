import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//  import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLiteMock, SQLiteObject} from '../classes/sqlite-mock';
import { Survey } from '../classes/survey';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveys: Array<Survey> = [];
  constructor(private storage: Storage
    ,private sqlite: SQLiteMock,
    public alertController: AlertController
    ) {
  this.sqlite.create({
    name: 'ionicsurveyonedb.db',
    location: 'default'
  })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS surveys(id TEXT PRIMARY KEY,course TEXT, sex TEXT,age INT,article1 INT,article1_1 INT,article1_2 INT,article1_3 INT,article1_4 INT,article1_5 INT,article1_6 INT,article1_7 INT,article1_8 INT,article1_9 INT,article1_10 INT,article1_11 INT,article1_12 INT,article1_13 INT,article1_14 INT,article1_others TEXT,article2 INT,article2_1 INT,article2_2 INT,article2_3 INT,article2_4 INT,article2_5 INT,article2_6 INT,article2_7 INT,article2_8 INT,article2_9 INT,article2_10 INT,article2_11 INT,article2_12 INT,article2_13 INT,article2_14 INT,article2_others TEXT,article3 INT,article3_1 INT,article3_2 INT,article3_3 INT,article3_4 INT,article3_5 INT,article3_6 INT,article3_7 INT,article3_8 INT,article3_9 INT,article3_10 INT,article3_11 INT,article3_12 INT,article3_13 INT,article3_14 INT,article3_others TEXT,article4 INT,article4_1 INT,article4_2 INT,article4_3 INT,article4_4 INT,article4_5 INT,article4_6 INT,article4_7 INT,article4_8 INT,article4_9 INT,article4_10 INT,article4_11 INT,article4_12 INT,article4_13 INT,article4_14 INT,article4_others TEXT,created_at TEXT)',[])
        .then(() => {console.log('Initialized DB')
          this.get().then((results)=>{
            this.surveys = results.rows?  (Array.from(results.rows,(x:Survey) => new Survey(x))) :[];
          }).catch((e) => alert(e));
      })
        .catch(e => alert(JSON.stringify(e)));
        
    }) 
    .catch(e => alert(JSON.stringify(e)));
   }

   get() : Promise<any>{
     
    return this.sqlite.create({
      name: 'ionicsurveyonedb.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('SELECT * FROM surveys',[]);
  
      })
      .catch((e) => alert(e));
   }

   randomizer(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

   insert(survey){
    this.sqlite.create({
      name: 'ionicsurveyonedb.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        survey.id = Date.now() +'_'+this.randomizer();
        db.executeSql('INSERT INTO  surveys VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,datetime(\'now\'))',survey.toArray())
          .then(() => {
            this.presentAlert({header:'Success!',message:'Survey Submitted.',buttons: ['OK']})
            survey.created_at = moment().format('YYYY-MM-DD HH:MM:SS');
            this.surveys.push(survey);
            
        })
          .catch(e => alert(JSON.stringify(e)));
  
      })
      .catch(e => alert(e));
   }
   
   delete(survey){
    this.sqlite.create({
      name: 'ionicsurveyonedb.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM surveys WHERE id=?',[survey.id])
        .then(() => {
            const index = this.surveys.indexOf(survey);
            if (index > -1) {
              this.surveys.splice(index, 1);
            }
            this.presentAlert({header:'Success!',message:'Successfully deleted survey.',buttons: ['OK']})
          })
        .catch((e) => this.presentAlert({header:'Error',message:JSON.stringify(e),buttons: ['OK']})
        );
      }) 
      .catch((e) => this.presentAlert({header:'Error',message:JSON.stringify(e),buttons: ['OK']}));
      
   }

   clear(){
    this.sqlite.create({
      name: 'ionicsurveyonedb.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM surveys',[])
        .then(() => {
            this.presentAlert({header:'Success!',message:'Successfully cleared data.',buttons: ['OK']})
            this.surveys = [];
          })
        .catch((e) => this.presentAlert({header:'Error',message:JSON.stringify(e),buttons: ['OK']})
        );
      }) 
      .catch((e) => this.presentAlert({header:'Error',message:JSON.stringify(e),buttons: ['OK']}));
      
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
