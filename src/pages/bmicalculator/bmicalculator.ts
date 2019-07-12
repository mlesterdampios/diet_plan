import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the BmicalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmicalculator',
  templateUrl: 'bmicalculator.html',
})
export class BmicalculatorPage {
  variable : any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
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
    console.log('ionViewDidLoad BmicalculatorPage');
  }
  CalculateBMI(){
    console.log("kg : " + this.variable.kg);
    console.log("m : " + this.variable.m);
    console.log("m^2 : " + (this.variable.m*this.variable.m));
    this.variable.bmi = this.variable.kg / (this.variable.m*this.variable.m);
    if(this.variable.bmi < 18.5){
      this.variable.equi = "Malnourished";
    }else if (this.variable.bmi > 18.5 && this.variable.bmi < 25){
      this.variable.equi = "Well-fitted";
    }else{
      this.variable.equi = "Obese";
    }
  }

  Next(){
                      this.alertCtrl.create({
                    title: "Welcome!",
                    message: "Now we have determined your BMI, <br/>You can now start using the app!",
                    buttons: [{
                      text: "OK! Got it!",
                      handler: () => {
                        this.navCtrl.setRoot('HomePage', { restart : true });
                      }
                    }]
                  }).present();
  }
}
