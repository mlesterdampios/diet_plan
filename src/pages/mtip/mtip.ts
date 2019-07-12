import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the mTipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mtip',
  templateUrl: 'mtip.html',
})
export class mTipPage {

  mtips : any[];
  //page: number;
  cat : any = {};

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.cat.name = "Tips to Gain Weight";
    /*
    this.page = 1;
    let url = "";

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.cat.name = "mTips";
    if(this.navParams.get("cat")){
      this.cat = this.navParams.get("cat");
      url = "http://192.168.1.7/diet_plan/Api/mtip?page="+this.page+'&cat='+this.cat.id;
    }else{
      url = "http://192.168.1.7/diet_plan/Api/mtip?page="+this.page;
    }

    this.http.get(url).subscribe ((res)=>{
      console.log(url);
      console.log(res.json());

      let response = res.json();
      console.log(response);
      if(JSON.stringify(res.json()).toString()=="\"Error has occurred\""){
        loading.dismiss();
        this.toastCtrl.create({
          message: response.error,
          duration: 5000
        }).present();
        return;
      }else{
        loading.dismiss();
        this.mtips = response;
      }
    });
    */
    this.mtips = [{
      id : 1,
      name : "1. Don't drink water before meals.",
      full_instructions : "Don't drink water before meals. This can fill your stomach and make it harder to get in enough calories."
    },
    {
      id : 2,
      name : "2. Eat more often",
      full_instructions : "Eat more often. Squeeze in an additional meal or snack whenever you can, such as before bed."
    },
    {
      id : 3,
      name : "3.  Drink milk",
      full_instructions : "Drink milk. Drinking whole milk to quench thirst is a simple way to get in more high-quality protein and calories."
    },
    {
      id : 4,
      name : "4.  Try weight gainer shakes",
      full_instructions : "Try weight gainer shakes. If you’re really struggling then you can try weight gainer shakes. These are very high in protein, carbs and calories."
    },
    {
      id : 5,
      name : "5.  Use bigger plates. ",
      full_instructions : "Use bigger plates. Definitely use large plates if you’re trying to get in more calories, as smaller plates cause people to automatically eat less."
    },
    {
      id : 6,
      name : "6.  Add cream to your coffee",
      full_instructions : "Add cream to your coffee. This is a simple way to add in more calories."
    },
    {
      id : 7,
      name : "7.  Take creatine",
      full_instructions : "Take creatine. The muscle building supplement creatine monohydrate can help you gain a few pounds in muscle weight."
    },
    {
      id : 8,
      name : "8.  Get quality sleep",
      full_instructions : "8.  Get quality sleep. Sleeping properly is very important for muscle growth."
    },
    {
      id : 9,
      name : "9.  Eat your protein first and vegetables last",
      full_instructions : "Eat your protein first and vegetables last. If you have a mix of foods on your plate, eat the calorie-dense and protein-rich foods first. Eat the vegetables last."
    },
    {
      id : 10,
      name : "10.  Don't smoke. ",
      full_instructions : "10.  Don't smoke. Smokers tend to weigh less than non-smokers, and quitting smoking often leads to weight gain."
    }];
  }

  mtipdetials(mtip){
    this.navCtrl.push('mTipdetailsPage', { "mtip":mtip});
  }
}
