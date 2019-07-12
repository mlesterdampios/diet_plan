import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  loggedIn : boolean = false;
  toRefresh : boolean = false;

  constructor(public AppCtrl : App, public navCtrl: NavController, public navParams: NavParams,  public storage: Storage) {
    if(this.navParams.get("restart")){
      this.toRefresh = true;
    }
  }
  ionViewDidEnter() {
    let audittrail = [];
    console.log(1);
    console.log(audittrail);
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then((userLoginInfo)=>{
        if(userLoginInfo != null){
          console.log("User logged in...");
          this.user = userLoginInfo;
          console.log(this.user);
          this.loggedIn = true;
        }else{
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
          this.navCtrl.setRoot('SignupPage');
        }
      })
      /*
      this.storage.get("audittrail").then((pAudittrail)=>{
        if(pAudittrail != null){
          audittrail = pAudittrail;
        }
        console.log(2);
        console.log(audittrail);
        audittrail.push({
          name : "Used the app",
          desc : "Used the app at " + new Date()
        });
        console.log(3);
        console.log(audittrail);
        this.storage.set("audittrail", audittrail).then (()=>{
        })
        console.log(4);
        console.log(audittrail);
      })*/
    })
    if(this.toRefresh){
      window.location.reload();
    }
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
