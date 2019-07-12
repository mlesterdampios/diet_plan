import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-malnourished',
  templateUrl: 'malnourished.html'
})
export class MalnourishedPage {

  constructor(public navCtrl: NavController) {

  }

  openPage(pageName : string){
    if(pageName=="EverydaymealmPage"){
      this.navCtrl.push('EverydaymealmPage');
    }
    if(pageName=="TipPage"){
      this.navCtrl.push('TipPage');
    }
    if(pageName=="ShoppinglistmdetailsPage"){
      this.navCtrl.push('ShoppinglistmdetailsPage');
    }
  }
}
