import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Survey } from '../../classes/survey';
@Component({
  selector: 'app-take',
  templateUrl: './take.page.html',
  styleUrls: ['./take.page.scss'],
})
export class TakePage implements OnInit {
  survey:Survey;
  isSubmitted: any = false;
  constructor(private navCtrl:NavController) { 
    this.survey = new Survey();
  }
  
  ngOnInit() {
  }

  submit(){
    this.isSubmitted = true;
    console.log(this.survey);
  }

  back(){
    this.navCtrl.goBack();
  }

}
