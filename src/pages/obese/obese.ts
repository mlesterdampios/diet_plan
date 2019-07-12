import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-obese',
  templateUrl: 'obese.html'
})
export class ObesePage {

  constructor(public navCtrl: NavController) {

  }

  openPage(pageName : string){
    if(pageName=="EverydaymealoPage"){
      this.navCtrl.push('EverydaymealoPage');
    }
    if(pageName=="TipPage"){
      this.navCtrl.push('TipPage');
    }
    if(pageName=="ShoppinglistodetailsPage"){
      this.navCtrl.push('ShoppinglistodetailsPage');
    }
  }
}
