import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EverydaymealoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-everydaymealo',
   templateUrl: 'everydaymealo.html',
 })
 export class EverydaymealoPage {

   everydaymealos : any[];
   //page: number;
   cat : any = {};
   public loadProgress : any[];
   savedMeal : any = [];
   progress : any = [];
   progress_enabled = false;

   constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController, public storage: Storage) {
     this.cat.name = "Everyday Meals";

     this.everydaymealos = [{
       id : 1,
       name : "Day 1",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "1 apple<br/>"+
         "1 oz nuts<br/>",
         lunch : "2 cups veggie soup<br/>"+
         "1 cup baby carrots & sugar snap peas<br/>"+
         "2 tablespoons hummus<br/>",
         dinner : "4 oz salmon <br/>"+
         "1 cup steamed carrots <br/>"+
         "1 cup steamed broccoli 2 <br/>"+
         "tablespoons teriyaki sauce<br/>"+
         "1 teaspoon sesame seeds<br/>",
         additional : "Bake the salmon at 400°F (200°C) until firm to the touch, 10 to 15 minutes, depending on the thickness. Chop the carrots and broccoli and steam until tender-crisp, about 5 minutes for the carrots, 3 minutes for the broccoli. Drizzle everything with the teriyaki sauce and sprinkle with the sesame seeds.<br/>"
       }
     },
     {
       id : 2,
       name : "Day 2",
       profile_img : "assets/images/day2.jpg",
       full_instructions : {
         breakfast : "1 banana<br/>"+
         "1 oz nuts<br/>",
         lunch : "2 cups Veggie Soup<br/>"+
         "1 cup broccoli & cauliflower <br/>"+
         "2 tablespoons tzatziki<br/>",
         dinner : "4 oz grilled chicken + ½ cup roasted sweet potatoes<br/>"+
         "1 cup roasted Brussels sprouts + 1 tablespoon olive oil<br/>",
         additional : "Chop the sweet potatoes and halve the Brussels sprouts, and place on a sheet pan. Drizzle with 2 teaspoons olive oil, season with salt and pepper, and toss to coat. Roast at 450°F (230°C) until tender, about 15 minutes. Brush the chicken with 1 teaspoon olive oil and season with salt and pepper. Grill over medium-high heat until marked and no longer pink in the center, about 5 minutes per side."
       }
     },
     {
       id : 3,
       name : "Day 3",
       profile_img : "assets/images/day3.jpg",
       full_instructions : {
         breakfast : "green smoothie (made with 1/2 banana<br/>"+
         "1/2 cup frozen mango<br/>"+
         "1 cup kale + 1/2 cup plain, low-fat Greek yogurt <br/>"+
         "1/2 small avocado <br/>"+
         "1/2 cup nonfat milk)<br/>",
         lunch : "3 oz grilled chicken<br/>"+
         "1/2 cup cooked quinoa <br/>"+
         "1 cup cherry tomatoes & chopped cucumber <br/>"+
         "2 tablespoons feta cheese <br/>"+
         "1 tablespoon vinaigrette<br/>"+
         "1 cup baby carrots & sugar snap peas<br/>"+
         "2 tablespoons hummus<br/>",
         dinner : "4 oz mahi-mahi<br/>"+
         "1 cup steamed carrots <br/>"+
         "1 cup steamed broccoli <br/>"+
         "2 tablespoons teriyaki sauce<br/>"+
         "1 teaspoon sesame seeds<br/>",
         additional : "Bake the mahi-mahi at 400°F (200°C) until firm to the touch, 10 to 15 minutes, depending on the thickness. Chop and steam the carrots and broccoli until tender-crisp, about 5 minutes for the carrots, 3 minutes for the broccoli. Drizzle everything with the teriyaki sauce and sprinkle with the sesame seeds."
       }
     },
     {
       id : 4,
       name : "Day 4",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "1 apple<br/>"+
         "1 oz nuts<br/>",
         lunch : "3 oz tuna <br/>"+
         "2 cups mixed greens <br/>"+
         "1 cup cherry tomatoes & chopped cucumber<br/>"+
         "1 tablespoon vinaigrette<br/>"+
         "1 cup broccoli & cauliflower<br/>"+
         "2 tablespoons tzatziki<br/>"+
         "2 tablespoons hummus<br/>",
         dinner : "4 oz grilled chicken<br/>"+
         "1 cup steamed carrots <br/>"+
         "1/2 cup roasted sweet potatoes<br/>"+
         "1 cup roasted Brussels sprouts<br/>"+
         "1 tablespoon olive oil<br/>",
         additional : "Chop the sweet potatoes and halve the Brussels sprouts, and place on a sheet pan. Drizzle with 2 teaspoons olive oil, season with salt and pepper, and toss to coat. Roast at 450°F (230°C) until tender, about 15 minutes. Brush the chicken with 1 teaspoon olive oil and season with salt and pepper. Grill over medium-high heat until marked and no longer pink in the center, about 5 minutes per side."
       }
     },{
       id : 5,
       name : "Day 5",
       profile_img : "assets/images/day2.jpg",
       full_instructions : {
         breakfast : "1 apple <br/>"+
         "1 oz nuts<br/>",
         lunch : "3 oz lean deli turkey<br/>"+
         "1/4 avocado<br/>"+
         "1 whole-wheat tortilla<br/>"+
         "1 cup mixed greens<br/>"+
         "1 cup baby carrots & sugar snap peas<br/>"+
         "2 tablespoons hummus<br/>",
         dinner : "4 oz shrimp<br/>"+
         "1 cup steamed carrots<br/>"+
         "1 cup steamed broccoli<br/>"+
         " 1/2 cup cooked brown rice<br/>"+
         "2 tablespoons teriyaki sauce<br/>"+
         "1 teaspoon sesame seeds<br/>",
         additional : "Defrost the shrimp under cool running water and pat dry. In a nonstick pan over medium-high heat, toss the shrimp with a little all-natural cooking spray, and cook until bright pink, tightly furled, and warmed through. Chop and steam the carrots and broccoli until tender-crisp, about 5 minutes for the carrots, 3 minutes for the broccoli. Drizzle everything with the teriyaki sauce and sprinkle with the sesame seeds."
       }
     },{
       id : 6,
       name : "Day 6",
       profile_img : "assets/images/day3.jpg",
       full_instructions : {
         breakfast : "2 slices whole-wheat toast <br/>"+
         "2 hard-boiled eggs<br/>"+
         "hot sauce (optional)<br/>",
         lunch : "3 oz smoked salmon<br/>"+
         "1/4 avocado<br/>"+
         "1 whole-wheat tortilla<br/>"+
         "1 cup mixed greens<br/>"+
         "1 cup broccoli & cauliflower<br/>"+
         "2 tablespoons tzatziki<br/>",
         dinner : "4 oz lean steak <br/>"+
         "1 cup roasted sweet potatoes<br/>"+
         "1 cup roasted Brussels sprouts<br/>"+
         "1 tablespoon olive oil<br/>",
         additional : "Chop the sweet potatoes and halve the Brussels sprouts, and place on a sheet pan. Drizzle with 2 teaspoons olive oil, season with salt and pepper, and toss to coat. Roast at 450°F (230°C) until tender, about 15 minutes. Season the steak with salt and pepper. In a frying pan over medium-high heat, warm 1 teaspoon olive oil. Cook the steak until done to your liking, about 3 minutes per side for medium-rare. (Consuming raw or undercooked meats may increase your risk of foodborne illness.)"
       }
     },{
       id : 7,
       name : "Day 7",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "1 apple<br/>"+
         "1 oz nuts<br/>",
         lunch : "3 oz lean deli turkey<br/>"+
         "1/4 avocado<br/>"+
         "2 slices whole-wheat bread<br/>"+
         "1 cup mixed greens<br/>"+
         "1 cup baby carrots & sugar snap peas<br/>"+
         "2 tablespoons hummus<br/>",
         dinner : "2 slices veggie pizza<br/>"+
         "1 cup salad greens<br/>"+
         "1 tablespoon vinaigrette <br/>"+
         "5 fl oz red wine<br/>",
         additional : ""
       }
     }];

     this.loadProgress = [];
     this.progress = [];
     for(var i = 0; i <= this.everydaymealos.length; i++){
       this.loadProgress.push(0);
       this.progress.push(0);
     }
   }
   ionViewDidEnter() {
     for(var i = 0; i <= this.everydaymealos.length; i++){
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

         for(var i = 0; i <= this.everydaymealos.length; i++){

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
           for(var i = 0; i <= this.everydaymealos.length; i++){
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
   everydaymealodetials(everydaymealo){
     this.navCtrl.push('EverydaymealodetailsPage', { "everydaymealo":everydaymealo});
   }
 }
