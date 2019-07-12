import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  exercises : any[];
  page: number;
  cat : any = {};

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.page = 1;
    let url = "";

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.cat.name = "Workouts for Well-Fitted";
    
    if(this.navParams.get("cat").id==1){
      this.exercises = [  
        {  
           "id":"1",
           "excercise_category_id":"1",
           "name":"Pushups x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
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
           "name":"Leg Raise x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/legraise.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"4",
           "excercise_category_id":"1",
           "name":"Jumping Jacks x15",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/jumpingjacks.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"5",
           "excercise_category_id":"1",
           "name":"Squats x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==2){
      this.exercises = [  
        {  
           "id":"6",
           "excercise_category_id":"2",
           "name":"High Knees x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/highknees.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"7",
           "excercise_category_id":"2",
           "name":"Jumping Jack x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/jumpingjacks.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"8",
           "excercise_category_id":"2",
           "name":"Bench Dips x15",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/benchdips.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"9",
           "excercise_category_id":"2",
           "name":"Bicycle Crunches x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/bicyclecrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"10",
           "excercise_category_id":"2",
           "name":"Flutter Kicks x20",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/flutterkicks.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==3){
      this.exercises = [  
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
      this.exercises = [  
        {  
           "id":"11",
           "excercise_category_id":"4",
           "name":"Lunge x30",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/lunge.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"12",
           "excercise_category_id":"4",
           "name":"Squats x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"13",
           "excercise_category_id":"4",
           "name":"Pushups x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/pushups.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"14",
           "excercise_category_id":"4",
           "name":"Bench Dips x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/benchdips.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"15",
           "excercise_category_id":"4",
           "name":"Arm Crunches x30",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/armcrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==5){
      this.exercises = [  
        {  
           "id":"16",
           "excercise_category_id":"5",
           "name":"Alternate Heel Touch",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/heeltouch.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"17",
           "excercise_category_id":"5",
           "name":"Leg Up Crunches",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/LegUpCrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"18",
           "excercise_category_id":"5",
           "name":"Squats x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"19",
           "excercise_category_id":"5",
           "name":"V Crunches x15",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/VCrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"20",
           "excercise_category_id":"5",
           "name":"Jumping Jacks x14",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/jumpingjacks.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==6){
      this.exercises = [  
        {  
           "id":"21",
           "excercise_category_id":"6",
           "name":"High Knees x20",
           "time_length":"00:30:00",
           "full_instructions":"",
           "profile_img":"assets/images/highknees.jpg",
           "date_created":"2018-11-20 17:30:12",
           "is_deleted":"0"
        },
        {  
           "id":"22",
           "excercise_category_id":"6",
           "name":"Bicycle Crunches x16",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/bicyclecrunches.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"23",
           "excercise_category_id":"6",
           "name":"Plank with Leg Lift x40",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/PlankwithLegLift.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"24",
           "excercise_category_id":"6",
           "name":"Flutter Kicks x25",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/flutterkicks.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        },
        {  
           "id":"25",
           "excercise_category_id":"6",
           "name":"Squats x30",
           "time_length":"00:15:00",
           "full_instructions":"",
           "profile_img":"assets/images/squat.jpg",
           "date_created":"2018-11-20 17:30:52",
           "is_deleted":"0"
        }
     ]
    }else if(this.navParams.get("cat").id==7){
      this.exercises = [  
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

  exercisedetials(exercise){
    this.navCtrl.push('ExercisedetailsPage', { "exercise":exercise});
  }
}
