import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the oExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oexercise',
  templateUrl: 'oexercise.html',
})
export class oExercisePage {

  oexercises : any[];
  page: number;
  cat : any = {};

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.page = 1;
    let url = "";

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.cat.name = "Workouts for Obese";
    
    if(this.navParams.get("cat").id==1){
      this.oexercises = [  
        {  
           "id":"1",
           "excercise_category_id":"1",
           "name":"Squats x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"2",
           "excercise_category_id":"1",
           "name":"Wall Push-Ups x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/wallpush-ups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"3",
           "excercise_category_id":"1",
           "name":"Butt Bridge x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/buttbridge.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"4",
           "excercise_category_id":"1",
           "name":"Plank 30s",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"5",
           "excercise_category_id":"1",
           "name":"Claps over head x16",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clapsoverhead.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==2){
      this.oexercises = [  
        {  
           "id":"6",
           "excercise_category_id":"2",
           "name":"Standing Bicycle Crunches x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/bicyclecrunches.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"7",
           "excercise_category_id":"2",
           "name":"Wall Push Ups x22",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/wallpush-ups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"8",
           "excercise_category_id":"2",
           "name":"Clapping Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"9",
           "excercise_category_id":"2",
           "name":"Claps over head x16",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clapsoverhead.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"10",
           "excercise_category_id":"2",
           "name":"Plank 30s",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==3){
      this.oexercises = [  
        {  
           "id":"0",
           "excercise_category_id":"0",
           "name":"You need to get some rest",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==4){
      this.oexercises = [  
        {  
           "id":"11",
           "excercise_category_id":"4",
           "name":"Flutter Kicks 20s",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/flutterkicks.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"12",
           "excercise_category_id":"4",
           "name":"Bicycle Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/bicyclecrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"13",
           "excercise_category_id":"4",
           "name":"Clapping Crunches x24",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"14",
           "excercise_category_id":"4",
           "name":"Heel Touch x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/heeltouch.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"15",
           "excercise_category_id":"4",
           "name":"Squats x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==5){
      this.oexercises = [  
        {  
           "id":"16",
           "excercise_category_id":"5",
           "name":"Wall Push-Us x26",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/wallpush-ups.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"17",
           "excercise_category_id":"5",
           "name":"Butt Bridge x22",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/buttbridge.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"18",
           "excercise_category_id":"5",
           "name":"Claps over head x18",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clapsoverhead.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"19",
           "excercise_category_id":"5",
           "name":"Plank 36s",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"20",
           "excercise_category_id":"5",
           "name":"Heel Touch x26",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/heeltouch.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==6){
      this.oexercises = [  
        {  
           "id":"21",
           "excercise_category_id":"6",
           "name":"Swimmer and Superman x26",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/supermanandswimmer.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"22",
           "excercise_category_id":"6",
           "name":"Side-Lying Leg Lift Left x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/Side-LyingLeg LiftLeft.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"23",
           "excercise_category_id":"6",
           "name":"Side-Lying Leg Lift Right x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/Side-Lying LegLiftRight.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"24",
           "excercise_category_id":"6",
           "name":"Flutter Kicks 22s",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/flutterkicks.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"25",
           "excercise_category_id":"6",
           "name":"Plank 40s",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==7){
      this.oexercises = [  
        {  
           "id":"0",
           "excercise_category_id":"0",
           "name":"You need to get some rest",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }
    loading.dismiss();

  }

  oexercisedetials(oexercise){
    this.navCtrl.push('oExercisedetailsPage', { "oexercise":oexercise});
  }
}
