import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//  import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLiteMock, SQLiteObject} from '../classes/sqlite-mock';
import { Survey } from '../classes/survey';



@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  
  nSurveys:any = 0;
  surveys: Array<Survey> = [];
  constructor(private storage: Storage
    ,private sqlite: SQLiteMock
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
        //  this.clear();
    }) 
    .catch(e => alert(JSON.stringify(e)));

    this.storage.get('nSurveys').then((val) => {
      if(val == null){
        this.nSurveys = 0;
        this.storage.set('nSurveys',0);
      }else{
        this.nSurveys = val;
      }
    });
   }

   init():Promise<any>{
    this.storage.get('nSurveys').then((val) => {
      if(val == null){
        this.nSurveys = 0;
        this.storage.set('nSurveys',0);
      }else{
        this.nSurveys = val;
      }
    });
     return this.storage.get('nSurveys')
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
    let n = this.nSurveys;
    this.sqlite.create({
      name: 'ionicsurveyonedb.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        survey.id = Date.now() +'_'+this.randomizer();
        db.executeSql('INSERT INTO  surveys VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,datetime(\'now\'))',survey.toArray())
          .then(() => {
            alert('Survey Submitted')
            this.nSurveys++;
            this.surveys.push(survey);
            this.storage.set('nSurveys',this.nSurveys);
        })
          .catch(e => alert(JSON.stringify(e)));
  
      })
      .catch(e => alert(e));
   }

   clear(){
    this.sqlite.create({
      name: 'ionicsurveyonedb.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('DROP TABLE surveys',[])
        .then(() => console.log('Deleted DB'))
        .catch(e => alert(JSON.stringify(e)));
        this.storage.clear();
        this.nSurveys = 0;
      }) 
      .catch(e => alert(JSON.stringify(e)));
      
   }
}
