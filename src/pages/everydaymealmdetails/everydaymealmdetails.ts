import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';



/**
 * Generated class for the EverydaymealmdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({
  selector: 'page-everydaymealmdetails',
  templateUrl: 'everydaymealmdetails.html',
})
export class EverydaymealmdetailsPage {

	everydaymealm: any;
  loggedIn: boolean = false;
  isRecordDone: boolean = false;
  user : any = {};
  savedMeal : any = [];
   public loadProgress : number = 0;
   progress : number = 0;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
  	this.everydaymealm = this.navParams.get("everydaymealm");
              this.savedMeal = [{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          }];
  	console.log(this.everydaymealm);
  }
/*
  savedMeal = [{
    breakfast : true,
    lunch : true,
    dinner : true
  }];

*/
updateProgressBar(){
  this.loadProgress = 0;
  this.progress=0;
  if(this.savedMeal[this.everydaymealm.id].breakfast){
    this.progress++;
  }
  if(this.savedMeal[this.everydaymealm.id].lunch){
    this.progress++;
  }
  if(this.savedMeal[this.everydaymealm.id].dinner){
    this.progress++;
  }

}
  ionViewDidEnter() {
    this.storage.ready().then(()=>{
      this.storage.get("savedMeal").then((savedMeal)=>{
        if(savedMeal != null){
          this.savedMeal = savedMeal;
        }else{
          this.savedMeal = [{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          },{
            breakfast : false,
            lunch : false,
            dinner : false
          }];
        }
        console.log(this.savedMeal);
        this.updateProgressBar();
      })
    })
      setInterval(() => {
      if (this.loadProgress < 100)
        if(this.progress*33.33>this.loadProgress){
        this.loadProgress += 1;
        }
      else
        clearInterval(this.loadProgress);
    }, 10);
  }

  updateMeal(meal){
    let _meal = "";
    if (meal==1)
      _meal = "Breakfast";
    if (meal==2)
      _meal = "Lunch";
    if (meal==3)
      _meal = "Dinner";
     this.storage.set("savedMeal", this.savedMeal);
     this.updateProgressBar();
     console.log(this.savedMeal);
                       let audittrail = [];
          this.storage.get("audittrail").then((pAudittrail)=>{
        if(pAudittrail != null){
          audittrail = pAudittrail;
        }
        console.log(2);
        console.log(audittrail);
        audittrail.push({
          name : "Day "+this.everydaymealm.id+": Marked "+_meal,
          desc : "Marked the checkbox on "+new Date()
        });
        console.log(3);
        console.log(audittrail);
        this.storage.set("audittrail", audittrail).then (()=>{
        })
        console.log(4);
        console.log(audittrail);
      })
     if(this.everydaymealm.id==7 && this.progress==3){
       this.navCtrl.setRoot('newBmicalculatorPage');
     }
  }

  nl2br(string)
  {
      return string.replace(/\n/g, "<br />");
  }

  Login(){
    this.navCtrl.push('LoginPage');
  }

}
