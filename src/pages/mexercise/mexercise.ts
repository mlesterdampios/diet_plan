import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the mExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mexercise',
  templateUrl: 'mexercise.html',
})
export class mExercisePage {

  mexercises : any[];
  page: number;
  cat : any = {};

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.page = 1;
    let url = "";

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.cat.name = "Workouts for Malnourished";
    
    if(this.navParams.get("cat").id==1){
      this.mexercises = [  
        {  
           "id":"1",
           "excercise_category_id":"1",
           "name":"Running 500m",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/highknees.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"2",
           "excercise_category_id":"1",
           "name":"Squats x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"3",
           "excercise_category_id":"1",
           "name":"Push- Ups x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"4",
           "excercise_category_id":"1",
           "name":"Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"5",
           "excercise_category_id":"1",
           "name":"Walking Lunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/lunge.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"6",
           "excercise_category_id":"1",
           "name":"Tricep Dips x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==2){
      this.mexercises = [  
        {  
           "id":"7",
           "excercise_category_id":"2",
           "name":"Squats x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"8",
           "excercise_category_id":"2",
           "name":"Tricep Dips x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"9",
           "excercise_category_id":"2",
           "name":"Push- Ups x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"10",
           "excercise_category_id":"2",
           "name":"Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==3){
      this.mexercises = [  
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
      this.mexercises = [  
        {  
           "id":"11",
           "excercise_category_id":"4",
           "name":"Running 200m",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/highknees.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"12",
           "excercise_category_id":"4",
           "name":"Squats x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"13",
           "excercise_category_id":"4",
           "name":"Push-Ups x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"14",
           "excercise_category_id":"4",
           "name":"Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==5){
      this.mexercises = [  
        {  
           "id":"15",
           "excercise_category_id":"5",
           "name":"Bicycling 500m",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/bicyclecrunches.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"16",
           "excercise_category_id":"5",
           "name":"PushUps x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"17",
           "excercise_category_id":"5",
           "name":"Squats x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"18",
           "excercise_category_id":"5",
           "name":"Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==6){
      this.mexercises = [  
        {  
           "id":"19",
           "excercise_category_id":"6",
           "name":"Tricpe Dips x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/plank.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"20",
           "excercise_category_id":"6",
           "name":"Squats x15",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"21",
           "excercise_category_id":"6",
           "name":"Crucnhes x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/clappingcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"22",
           "excercise_category_id":"6",
           "name":"PushUps x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==7){
      this.mexercises = [  
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

  mexercisedetials(mexercise){
    this.navCtrl.push('mExercisedetailsPage', { "mexercise":mexercise});
  }
}
