import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EverydaymealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-everydaymeal',
   templateUrl: 'everydaymeal.html',
 })
 export class EverydaymealPage {

   everydaymeals : any[];
   //page: number;
   cat : any = {};
   public loadProgress : any[];
   savedMeal : any = [];
   progress : any = [];
   progress_enabled = false;

   constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController, public storage: Storage) {
     this.cat.name = "Everyday Meals";

     this.everydaymeals = [{
       id : 1,
       name : "Day 1",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "1 serving Avocado Egg Toast<br/>",
         lunch : "2 cups mixed greens<br/>"+
         "3/4 cup veggies of your choice (try cucumbers and tomatoes)<br/>"+
         "2/3 cup chickpeas, rinsed<br/>"+
         "1 Tbsp. almonds, chopped<br/>"+
         "1 medium orange",
         dinner : "1 serving Seared Salmon with Green Peppercorn Sauce<br/>"+
         "1 cup steamed green beans<br/>"+
         "1 baked medium red potato, drizzled with 1/2 Tbsp. olive oil and a pinch each of salt and pepper.<br/>",
         additional : ""
       }
     },
     {
       id : 2,
       name : "Day 2",
       profile_img : "assets/images/day2.jpg",
       full_instructions : {
         breakfast : "1 cup bran cereal<br/>"+
         "1 cup skim milk<br/>"+
         "1/2 cup blueberries<br/>",
         lunch : "1 medium apple<br/>"+
         "3/4 medium red bell pepper, sliced<br/>"+
         "2 Tbsp. hummus<br/>",
         dinner : "2 cups Roasted Tofu & Peanut Noodle Salad",
         additional : ""
       }
     },
     {
       id : 3,
       name : "Day 3",
       profile_img : "assets/images/day3.jpg",
       full_instructions : {
         breakfast : "1 cup nonfat plain Greek yogurt<br/>"+
         "1/2 cup blueberries<br/>"+
         "1 1/2 Tbsp. slivered almonds<br/>",
         lunch : "1 1/2 cups Roasted Tofu & Peanut Noodle Salad<br/>"+
         "1 cup strawberries<br/>",
         dinner : "1 serving Grilled Romaine with Avocado-Lime Dressing<br/>"+
         "4 oz. cooked chicken breast, cooked in 1 1/2 tsp. olive oil and seasoned with 1/4 tsp. cumin and a pinch each of salt and pepper<br/>"+
         "3/4 cup cooked quinoa<br/>",
         additional : ""
       }
     },
     {
       id : 4,
       name : "Day 4",
       profile_img : "assets/images/day4.jpg",
       full_instructions : {
         breakfast : "1 cup bran cereal<br/>"+
         "1 cup skim milk<br/>"+
         "1/4 cup blueberries<br/>",
         lunch : "3 cups mixed greens<br/>"+
         "3 oz. leftover cooked chicken breast<br/>"+
         "5 cherry tomatoes, halved<br/>"+
         "1/2 cup cucumber slices<br/>"+
         "1/4 cup shredded carrot<br/>"+
         "1 medium orange<br/>",
         dinner : "1 serving Cod with Tomato Cream Sauce<br/>"+
         "1/2 cup cooked brown rice<br/>"+
         "2 cups mixed greens, topped with 1 Tbsp. balsamic vinegar and 2 tsp. olive oil.<br/>",
         additional : ""
       }
     },{
       id : 5,
       name : "Day 5",
       profile_img : "assets/images/day5.jpg",
       full_instructions : {
         breakfast : "1/2 cup rolled oats, cooked in 1 cup milk<br/>"+
         "1/2 cup sliced strawberries<br/>",
         lunch : "2 corn tortillas<br/>"+
         "2/3 cup canned black beans, rinsed<br/>"+
         "1/2 bell pepper, sliced<br/>"+
         "2 Tbsp. shredded Cheddar cheese<br/>"+
         "2 Tbsp. salsa or pico de gallo<br/>"+
         "1/2 cup blueberries<br/>",
         dinner : "1 1/4 cups Chicken Cauliflower Fried Rice<br/>"+
         "2 cups mixed greens, topped with 1 Tbsp. red wine vinegar and 2 tsp. olive oil.<br/>",
         additional : ""
       }
     },{
       id : 6,
       name : "Day 6",
       profile_img : "assets/images/day6.jpg",
       full_instructions : {
         breakfast : "1 cup bran cereal<br/>"+
         "1 cup skim milk<br/>"+
         "1/2 cup blueberries<br/>",
         lunch : "1 medium orange<br/>"+
         "1 cup strawberries<br/>",
         dinner : "1 serving Toaster-Oven Tostada",
         additional : ""
       }
     },{
       id : 7,
       name : "Day 7",
       profile_img : "assets/images/day7.jpg",
       full_instructions : {
         breakfast : "1 serving Avocado Egg Toast<br/>",
         lunch : "2 cups spinach<br/>"+
         "2.5 oz. chunk light tuna in water, drained<br/>"+
         "1/2 cup canned white beans, rinsed<br/>"+
         "3/4 cup veggies of your choice (try tomatoes & cucumbers)<br/>"+
         "1 medium orange<br/>",
         dinner : "1 serving Lemongrass Pork & Spaghetti Squash Noodle Bowl<br/>",
         additional : ""
       }
     }];

     this.loadProgress = [];
     this.progress = [];
     for(var i = 0; i <= this.everydaymeals.length; i++){
       this.loadProgress.push(0);
       this.progress.push(0);
     }
   }
   ionViewDidEnter() {
     for(var i = 0; i <= this.everydaymeals.length; i++){
       this.loadProgress[i] = 0;
       this.progress[i] = 0;
     }
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

         for(var i = 0; i <= this.everydaymeals.length; i++){

           if(this.savedMeal[i].breakfast){
             this.progress[i]++;
           }
           if(this.savedMeal[i].lunch){
             this.progress[i]++;
           }
           if(this.savedMeal[i].dinner){
             this.progress[i]++;
           }
         }
         console.log(this.progress);
         console.log(this.loadProgress);
         console.log('-----------');
         if(!this.progress_enabled){
         setInterval(() => {
           for(var i = 0; i <= this.everydaymeals.length; i++){
             if (this.loadProgress[i] < 100){
               if(this.progress[i]*33.33>this.loadProgress[i]){
                 this.loadProgress[i] += 1;
               }
             }
             else{
               clearInterval(this.loadProgress[i]);
             }

           }}, 10);
       }
       this.progress_enabled=true;
       })
     })
   }
   everydaymealdetials(everydaymeal){
     this.navCtrl.push('EverydaymealdetailsPage', { "everydaymeal":everydaymeal});
   }
 }
