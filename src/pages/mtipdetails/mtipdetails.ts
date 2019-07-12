import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
/**
 * Generated class for the mTipdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-mtipdetails',
  templateUrl: 'mtipdetails.html',
})
export class mTipdetailsPage {

	mtip: any;
  loggedIn: boolean = false;
  isRecordDone: boolean = false;
  user : any = {};
  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
  	this.mtip = this.navParams.get("mtip");
  	console.log(this.mtip);
  }

  ionViewDidEnter() {
    /*
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then((userLoginInfo)=>{
        if(userLoginInfo != null){
          console.log("User logged in...");
          this.user = userLoginInfo;
          console.log(this.user);
          this.loggedIn = true;
          this.http.get("http://192.168.1.7/diet_plan/Api/isUserHavemTipd/"+this.user.id+"/"+this.mtip.id).subscribe ((res)=>{
            if(JSON.stringify(res.json()).toString()=="\"Error has occurred\""){
              this.isRecordDone = false;
            }else{
              this.isRecordDone = true;
            }
          });
        }else{
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }
      })
    })
    */
  }

  RecordAsDone(){
    /*
    let logData = {};
    logData = {
      user_id : this.user.id,
      excercise_id : this.mtip.id
    };
    let postData = new FormData();
    postData.append('data' , JSON.stringify(logData));
    this.http.post("http://192.168.1.7/diet_plan/Api/UserHavemTipd/", postData )
    .subscribe (activitydata=>{
      var alert = this.alertCtrl.create({
        title: "Record Done!",
        buttons: [{
          text: "Close"
        }]
      }).present();
      this.isRecordDone = true;
    });
    */
  }

  nl2br(string)
  {
      return string.replace(/\n/g, "<br />");
  }

  Login(){
    this.navCtrl.push('LoginPage');
  }

}
