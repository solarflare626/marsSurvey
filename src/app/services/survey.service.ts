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
      db.executeSql('CREATE TABLE IF NOT EXISTS surveys(id TEXT PRIMARY KEY,course TEXT, gender TEXT,age INT,q1_1 INT,q1_2 INT,q1_3 INT,q1_4 INT,q1_none INT,q2_1 INT,q2_2 INT,q2_3 INT,q2_4 INT,q2_5 INT,q2_6 INT,others TEXT)',[])
        .then(() => {console.log('Initialized DB')
          this.get().then((results)=>{
            this.surveys = results.rows?  (Array.from(results.rows,(x:Survey) => new Survey(x))) :[];
          }).catch((e) => alert(e));
      })
        .catch(e => alert(JSON.stringify(e)));
        // this.clear();
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
        db.executeSql('INSERT INTO  surveys VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',survey.toArray())
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
