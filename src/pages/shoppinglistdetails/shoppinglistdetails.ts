import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
/**
 * Generated class for the ShoppinglistdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-shoppinglistdetails',
  templateUrl: 'shoppinglistdetails.html',
})
export class ShoppinglistdetailsPage {

	shoppinglist: any;
  loggedIn: boolean = false;
  isRecordDone: boolean = false;
  user : any = {};
  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
  	//this.shoppinglist = this.navParams.get("shoppinglist");
    console.log(this.shoppinglist);
    this.shoppinglist = {
      id : 1,
      name : "Shopping List",
      profile_img : "assets/images/vegetables.jpg",
      full_instructions : ""+
      "1/2 Grape Fruit<br/>"+
      "4 Slice of Toast<br/>"+
      "2 Tablespoons of Peanut Butter<br/>"+
      "2 Cup of coffee or Tea (with caffeine)<br/>"+
      "1 1/2 Cup of Tuna<br/>"+
      "1 Cup of Green Beans<br/>"+
      "2 Bananas<br/>"+
      "2 Small Apple<br/>"+
      "2 1/2 Cups of Vanilla Ice Cream<br/>"+
      "3 Hard Boiled Egg<br/>"+
      "10 Saltine Crackers<br/>"+
      "1 Slice of Cheddar Cheese<br/>"+
      "2 Hot Dogs (without bun)<br/>"+
      "1 Cup of Broccoli<br/>"+
      "1/2 Cup of Carrot<br/>"
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
          this.http.get("http://192.168.1.7/diet_plan/Api/isUserHaveShoppinglistd/"+this.user.id+"/"+this.shoppinglist.id).subscribe ((res)=>{
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
      excercise_id : this.shoppinglist.id
    };
    let postData = new FormData();
    postData.append('data' , JSON.stringify(logData));
    this.http.post("http://192.168.1.7/diet_plan/Api/UserHaveShoppinglistd/", postData )
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
