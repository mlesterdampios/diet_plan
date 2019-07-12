import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html'
})
export class NormalPage {

  constructor(public navCtrl: NavController) {

  }

  openPage(pageName : string){
    if(pageName=="EverydaymealPage"){
      this.navCtrl.push('EverydaymealPage');
    }
    if(pageName=="TipPage"){
      this.navCtrl.push('TipPage');
    }
    if(pageName=="ShoppinglistdetailsPage"){
      this.navCtrl.push('ShoppinglistdetailsPage');
    }
  }
}
