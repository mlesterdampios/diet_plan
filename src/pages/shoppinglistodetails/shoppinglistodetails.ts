import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
/**
 * Generated class for the ShoppinglistodetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-shoppinglistodetails',
  templateUrl: 'shoppinglistodetails.html',
})
export class ShoppinglistodetailsPage {

	shoppinglisto: any;
  loggedIn: boolean = false;
  isRecordDone: boolean = false;
  user : any = {};
  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
  	//this.shoppinglisto = this.navParams.get("shoppinglisto");
    console.log(this.shoppinglisto);
    this.shoppinglisto = {
      id : 1,
      name : "Shopping List",
      profile_img : "assets/images/vegetables.jpg",
      full_instructions : ""+
      "2 Cookie<br/>"+
      "7 Eggs<br/>"+
      "2 Fat-free milk<br/>"+
      "7 Yogurt<br/>"+
      "1 Cheese<br/>"+
      "1 Grapefruits or oranges<br/>"+
      "4 Berries of choice<br/>"+
      "2 Fruits<br/>"+
      "12 Vegetables<br/>"+
      "1 Beans<br/>"+
      "2 Corn<br/>"+
      "2 Hummus or mashed potato<br/>"+
      "3 Potatoes <br/>"
    };
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
          this.http.get("http://192.168.1.7/diet_plan/Api/isUserHaveShoppinglistod/"+this.user.id+"/"+this.shoppinglisto.id).subscribe ((res)=>{
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
   console.log("shopinglisto");
  }

  RecordAsDone(){
    /*
    let logData = {};
    logData = {
      user_id : this.user.id,
      excercise_id : this.shoppinglisto.id
    };
    let postData = new FormData();
    postData.append('data' , JSON.stringify(logData));
    this.http.post("http://192.168.1.7/diet_plan/Api/UserHaveShoppinglistod/", postData )
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
