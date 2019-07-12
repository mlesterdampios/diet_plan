import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	username: string;
	password: string;
  constructor(public loadingCtrl: LoadingController, public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public storage: Storage, public alertCtrl: AlertController) {
  	this.username ="";
  	this.password ="";

  }

  login(){
    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();
    /*
    {  
   "id":"1",
   "name":"",
   "username":"admin",
   "password":"202cb962ac59075b964b07152d234b70",
   "isadmin":"1",
   "email":"",
   "gender":"Undefined",
   "contact":"",
   "address":"",
   "age":"0",
   "height":"0",
   "weight":"0.00",
   "profile_img":"uploads\/profile\/default_user.png",
   "date_created":"2018-11-20 17:22:16",
   "is_deleted":"0"
    }
    */

  	this.http.get("http://192.168.1.7/diet_app/Api/login/"+this.username+"/"+this.password).subscribe ((res)=>{
  		console.log(res.json());

  		let response = res.json();
      console.log(response);

  		if(JSON.stringify(res.json()).toString()=="\"Error has occurred\""){
  			loading.dismiss();
        this.toastCtrl.create({
          message: "Please check credentials or Account maybe Inactive/Pending Approval. Please contact admin.",
  				duration: 5000
  			}).present();
  			return;
  		}

  		this.storage.set("userLoginInfo", response).then (()=>{
        loading.dismiss();
                  this.alertCtrl.create({
                    title: "Login Success",
                    message: "You have been logged in successfully.",
                    buttons: [{
                      text: "OK",
                      handler: () => {
                        if(this.navParams.get("next")){
                          this.navCtrl.push(this.navParams.get("next"));
                        }else{
                          //this.menuCtrl.enable(false);
                          //this.navCtrl.setRoot('HomePage');
                          this.navCtrl.popToRoot()
                        }
                      }
                    }]
                  }).present();
  		})
  	});
  }

    signup(){
    	this.navCtrl.push('SignupPage');
  }
}
