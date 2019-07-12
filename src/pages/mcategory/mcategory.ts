import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the mCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mcategory',
  templateUrl: 'mcategory.html',
})
export class mCategoryPage {

  mcategorys : any[];
  page: number;
  user: any;
  loggedIn: boolean;
  isAdmin : any;

  constructor(public storage: Storage, public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();


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
          this.mcategorys = [  
            {  
               "id":1,
               "name":"Monday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/1-1542706093.jpg",
               "date_created":"2018-11-20 17:27:39",
               "is_deleted":"0",
               "exerciseCount":6
            },
            {  
               "id":2,
               "name":"Tuesday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/2-1542706099.jpg",
               "date_created":"2018-11-20 17:27:46",
               "is_deleted":"0",
               "exerciseCount":4
            },
            {  
               "id":3,
               "name":"Wednesday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/3-1542706104.jpg",
               "date_created":"2018-11-20 17:27:55",
               "is_deleted":"0",
               "exerciseCount":0
            },
            {  
               "id":4,
               "name":"Thursday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/4-1542706110.jpg",
               "date_created":"2018-11-20 17:28:00",
               "is_deleted":"0",
               "exerciseCount":4
            },
            {  
               "id":5,
               "name":"Friday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/5-1542706115.jpg",
               "date_created":"2018-11-20 17:28:05",
               "is_deleted":"0",
               "exerciseCount":4
            },
            {  
               "id":6,
               "name":"Saturday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/5-1542706115.jpg",
               "date_created":"2018-11-20 17:28:05",
               "is_deleted":"0",
               "exerciseCount":4
            },
            {  
               "id":7,
               "name":"Sunday",
               "description":"",
               "profile_img":"uploads\/excercisecategories\/5-1542706115.jpg",
               "date_created":"2018-11-20 17:28:05",
               "is_deleted":"0",
               "exerciseCount":0
            }
         ];
         if(this.user.bmi_mode==3){
            for(var i=0; i < this.mcategorys.length; i++){
               this.mcategorys[i].profile_img = "assets/images/obese"+(i+1)+".png";
            }
         }
         if(this.user.bmi_mode==2){
            for(var i=0; i < this.mcategorys.length; i++){
               this.mcategorys[i].profile_img = "assets/images/well-fitted"+(i+1)+".png";
            }
         }
         if(this.user.bmi_mode==1){
            for(var i=0; i < this.mcategorys.length; i++){
               this.mcategorys[i].profile_img = "assets/images/malnourished"+(i+1)+".png";
            }
         }
        }else{
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }
      })
    })
   loading.dismiss();
  }
  ionViewDidEnter() {

 }
  openExerciseByCat(mcategory){
    this.navCtrl.push('mExercisePage', { "cat":mcategory });
  }
}
