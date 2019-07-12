import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

	homePage: any;
  user: any;
  isAdmin : any;
	@ViewChild('content') childNavCtrl: NavController;
	loggedIn: boolean;

  constructor(private splashscreen: SplashScreen, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.homePage = 'HomePage';
    this.user = {};
    this.isAdmin =0;
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then((userLoginInfo)=>{
        if(userLoginInfo != null){
          console.log("User logged in...");

          console.log(this.user);


          this.childNavCtrl.setRoot('StartPage');
        }
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
    ionViewDidEnter() {
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then((userLoginInfo)=>{
        if(userLoginInfo != null){
          console.log("User logged in...");
          this.user = userLoginInfo;
          console.log(this.user);
          this.loggedIn = true;
          if(this.user.user_level == 1){
            this.isAdmin = 1;
          }else{
            this.isAdmin = 0;
          }
        }else{
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }
      })
    })
  }

  openPage(pageName : string){
    if(pageName=="homepage"){
      this.childNavCtrl.setRoot('HomePage');
    }
    if(pageName=="BmicalculatorPage"){
      this.navCtrl.push('BmicalculatorPage');
    }
    if(pageName=="AudittrailPage"){
      this.navCtrl.push('AudittrailPage');
    }
    if(pageName=="signup"){
      this.navCtrl.push('SignupPage');
    }
    if(pageName=="EverydaymealPage"){
      this.navCtrl.push('EverydaymealPage');
    }
    if(pageName=="EverydaymealoPage"){
      this.navCtrl.push('EverydaymealoPage');
    }
    if(pageName=="EverydaymealmPage"){
      this.navCtrl.push('EverydaymealmPage');
    }
    if(pageName=="login"){
      this.navCtrl.push('LoginPage');
      //this.loggedIn = true;
    }
    if(pageName=="TipPage"){
      this.navCtrl.push('TipPage');
      //this.loggedIn = true;
    }
    if(pageName=="oTipPage"){
      this.navCtrl.push('oTipPage');
      //this.loggedIn = true;
    }
    if(pageName=="mTipPage"){
      this.navCtrl.push('mTipPage');
      //this.loggedIn = true;
    }
    if(pageName=="ShoppinglistdetailsPage"){
      this.navCtrl.push('ShoppinglistdetailsPage');
      //this.loggedIn = true;
    }
    if(pageName=="NormalPage"){
      this.navCtrl.push('NormalPage');
      //this.loggedIn = true;
    }
    if(pageName=="ObesePage"){
      this.navCtrl.push('ObesePage');
      //this.loggedIn = true;
    }
    if(pageName=="MalnourishedPage"){
      this.navCtrl.push('MalnourishedPage');
      //this.loggedIn = true;
    }
    if(pageName=="activities"){
      //this.navCtrl.push('ActivityPage');
      //this.loggedIn = true;
    }
    if(pageName=="weekcategory"){
      //this.navCtrl.push('WeekcategoryPage');
    }
    if(pageName=="myaccount"){
       this.navCtrl.push('SignupPage', { "user":this.user});
    }
    if(pageName=="category"){
      this.navCtrl.push('CategoryPage');
    }
    if(pageName=="ocategory"){
      this.navCtrl.push('oCategoryPage');
    }
    if(pageName=="mcategory"){
      this.navCtrl.push('mCategoryPage');
    }
    if(pageName=="logout"){
      this.storage.remove("userLoginInfo");
        this.user = {};
        this.loggedIn = false;
        this.isAdmin = 0;
      
      this.storage.remove("savedMeal");
      this.storage.remove("audittrail");
      this.splashscreen.show();
  window.location.reload();
    }
  }
}
