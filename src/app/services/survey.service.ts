import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  nSurveys: Number = 0;
  constructor(private storage: Storage) {
    this.storage.get('nSurveys').then((val) => {
      if(val == null){
        this.nSurveys = 0;
        this.storage.set('nSurveys',0);
      }
    });
   }

   init():Promise<any>{
     return this.storage.get('nSurveys')
   }
}
