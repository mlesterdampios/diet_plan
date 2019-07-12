import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  user : any = {name:'Guest'};

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then((userLoginInfo)=>{
        if(userLoginInfo != null){
          console.log("User logged in...");
          this.user = userLoginInfo;
          console.log(this.user);
        }else{
          console.log("No user found.");
          this.user = {name:'Guest'};
        }
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  ionViewDidEnter() {

  }
start(){
  this.navCtrl.popToRoot();
}
}
