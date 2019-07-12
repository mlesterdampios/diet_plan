import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the newBmicalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newbmicalculator',
  templateUrl: 'newbmicalculator.html',
})
export class newBmicalculatorPage {
  variable : any = {}
    newUser: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.variable.kg = 0;
    this.variable.m = 0;
    this.variable.bmi = 0;
    this.variable.equi = "NaN";
    if(this.navParams.get("kg")){
      this.variable.kg = this.navParams.get("kg");
    }
    if(this.navParams.get("m")){
      this.variable.m = this.navParams.get("m");
    }
    this.CalculateBMI();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad newBmicalculatorPage');
  }
  CalculateBMI(){
    console.log("kg : " + this.variable.kg);
    console.log("m : " + this.variable.m);
    console.log("m^2 : " + (this.variable.m*this.variable.m));


    this.variable.bmi = this.variable.kg / (this.variable.m*this.variable.m);
    if(this.variable.bmi < 18.5){
      this.variable.equi = "Malnourished";
      this.newUser.bmi_mode = 1;
    }else if (this.variable.bmi > 18.5 && this.variable.bmi < 25){
      this.variable.equi = "Well-fitted";
      this.newUser.bmi_mode = 2;
    }else{
      this.variable.equi = "Obese";
      this.newUser.bmi_mode = 3;
    }
  }
    ionViewDidEnter() {
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then((userLoginInfo)=>{
        if(userLoginInfo != null){
          console.log("User logged in...");
          this.newUser = userLoginInfo;
          console.log(this.newUser);
        }else{
          console.log("No user found.");
          this.newUser = {};
        }
      })
    })
  }

  Next(){
    let userData = {};

    userData = {
      "name": this.newUser.name,
      //"email": this.newUser.email,
      //"username": this.newUser.username,
      //"password": this.newUser.password,
      "gender": this.newUser.gender,
      "contact": this.newUser.contact,
      "address": this.newUser.address,
      "age": this.newUser.age,
      "height": this.variable.m,
      "weight": this.variable.kg,
      "bmi_mode" : this.newUser.bmi_mode
      //"profile_img": this.newUser.profile_img.replace("uploads/profile/","") || 'default_user.png'
    }
      this.storage.set("userLoginInfo", userData);
      //this.navCtrl.remove(1,2);
                  let audittrail = [];
          this.storage.get("audittrail").then((pAudittrail)=>{
        if(pAudittrail != null){
          audittrail = pAudittrail;
        }
        console.log(2);
        console.log(audittrail);
        audittrail.push({
          name : "Re-calculated BMI on "+new Date() ,
          desc : "Height : "+this.newUser.height+", Weight : "+this.newUser.weight+", Result : "+this.variable.equi
        });
        console.log(3);
        console.log(audittrail);
        this.storage.set("audittrail", audittrail).then (()=>{
        })
        console.log(4);
        console.log(audittrail);
      })
          this.storage.remove("savedMeal").then(()=>{
      })
    this.navCtrl.setRoot('HomePage', { restart : true });
  }
}