import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EverydaymealmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-everydaymealm',
   templateUrl: 'everydaymealm.html',
 })
 export class EverydaymealmPage {

   everydaymealms : any[];
   //page: number;
   cat : any = {};
   public loadProgress : any[];
   savedMeal : any = [];
   progress : any = [];
   progress_enabled = false;

   constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController, public storage: Storage) {
     this.cat.name = "Everyday Meals";

     this.everydaymealms = [{
       id : 1,
       name : "Day 1",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "4 large eggs with<br/>"+
         "1/4 cup grated cheese<br/>",
         lunch : "1 large baked potato<br/>"+
         "1/2 avocado diced<br/>"+
         "1 tomato diced<br/>"+
         "1 tin (95g) tuna (drained)<br/>"+
         "1 tbsp sour cream"+
         "1 large banana"+
         "100g low fat cottage cheese"+
         "100g whole almonds",
         dinner : "1 cup cooked brown rice<br/>"+
         "300g cooked chicken breast<br/>"+
         "1 cup green vegies<br/>",
         additional : ""
       }
     },
     {
       id : 2,
       name : "Day 2",
       profile_img : "assets/images/day2.jpg",
       full_instructions : {
         breakfast : "2 poached eggs<br/>"+
         "3 slices multigrain toast<br/>"+
         "3 scoops (60g) of Vital strength Rapid mixed with 400ml milk<br/>",
         lunch : "2 cups whole wheat pasta<br/>"+
         "1/2 cup grated cheese<br/>"+
         "125g tomato pasta sauce<br/>"+
         "200g chopped chicken breast<br/>"+
         "1 tub greek yoghurt<br/>"+
         "1 large applee<br/>"+
         "2 Tbsp peanut butter<br/>",
         dinner : "300g tuna steak<br/>"+
         "2 cups cooked soba noodles<br/>"+
         "1 cup stir fried vegetables<br/>",
         additional : ""
       }
     },
     {
       id : 3,
       name : "Day 3",
       profile_img : "assets/images/day3.jpg",
       full_instructions : {
         breakfast : "1 banana<br/>"+
         "1 cup oats<br/>"+
         "1 tbsp flaxseed oil<br/>"+
         "1 cup of milk<br/>",
         lunch : "2 slices multigrain bread<br/>"+
         "200g grilled steak<br/>"+
         "1/2 cup grated cheese<br/>"+
         "1 tomato sliced<br/>"+
         "1 Tbsp mayo<br/>"+
         "1/4 shredded lettuce<br/>"+
         "2 hardboiled egg<br/>"+
         "50g Fruit & Nut Mix<br/>",
         dinner : "1/2 Roast chicken<br/>"+
         "1 cup cooked couscous<br/>"+
         "1 cup broccoli<br/>"+
         "1 corn cob with 1 Tbs butter<br/>",
         additional : ""
       }
     },
     {
       id : 4,
       name : "Day 4",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "2 fried eggs<br/>"+
         "2 slices multigrain toast<br/>"+
         "100g bacon<br/>",
         lunch : "2 wholemeal tortillas<br/>"+
         "3/4 cup refried beans<br/>"+
         "1/2 cup cooked rice<br/>"+
         "1 tin (185g) tuna<br/>"+
         "1 sliced tomato<br/>"+
         "1 cup shredded lettuce<br/>"+
         "1/2 avocado<br/>"+
         "100g low fat cottage cheese<br/>"+
         "2 pieces fruit<br/>",
         dinner : "Grilled white fish (250g)<br/>"+
         "1 cup sweet potato<br/>"+
         "1 cup beans mixed green vegies or salad<br/>",
         additional : ""
       }
     },{
       id : 5,
       name : "Day 5",
       profile_img : "assets/images/day2.jpg",
       full_instructions : {
         breakfast : "80g cooked oats with 1/2 cups milk<br/>"+
         "1 sliced banana<br/>"+
         "1 Tbs honey<br/>",
         lunch : "Fish or chicken (200g)<br/>"+
         "1 large cooked sweet potato<br/>"+
         "1 cup green veggies<br/>"+
         "1 piece of fruit<br/>"+
         "100g whole almonds, Chicken/turkey sandwich with 1 slice cheese",
         dinner : "2 cups wholemeal pasta<br/>"+
         "shredded chicken breast (200g)<br/>"+
         "5 cherry tomatoes, basil, mushroom<br/>",
         additional : ""
       }
     },{
       id : 6,
       name : "Day 6",
       profile_img : "assets/images/day3.jpg",
       full_instructions : {
         breakfast : "4 large eggs with 1/4 cup grated cheese<br/>",
         lunch : "2 cups whole wheat pasta<br/>"+
         "1/2 cup grated cheese<br/>"+
         "125g tomato pasta sauce<br/>"+
         "200g chopped chicken breast<br/>"+
         "1 large banana<br/>"+
         "100g low fat cottage cheese<br/>"+
         "100g whole almonds<br/>",
         dinner : "300g tuna steak<br/>"+
         "2 cups cooked soba noodles<br/>"+
         "1 cup stir fried vegetables<br/>",
         additional : ""
       }
     },{
       id : 7,
       name : "Day 7",
       profile_img : "assets/images/day1.jpg",
       full_instructions : {
         breakfast : "2 poached eggs<br/>"+
         "3 slices multigrain toast<br/>",
         lunch : "1 large baked potato<br/>"+
         "1/2 avocado diced<br/>"+
         "1 tomato diced<br/>"+
         "1 tin (95g) tuna (drained)<br/>"+
         "1 tbsp sour cream<br/>"+
         "1 tub greek yoghurt<br/>"+
         "1 large apple<br/>"+
         "2 Tbsp peanut butter<br/>",
         dinner : "1 cup cooked brown rice<br/>"+
         "300g cooked chicken breast<br/>"+
         "1 cup green vegies<br/>",
         additional : ""
       }
     }];

     this.loadProgress = [];
     this.progress = [];
     for(var i = 0; i <= this.everydaymealms.length; i++){
       this.loadProgress.push(0);
       this.progress.push(0);
     }
   }
   ionViewDidEnter() {
     for(var i = 0; i <= this.everydaymealms.length; i++){
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

         for(var i = 0; i <= this.everydaymealms.length; i++){

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
           for(var i = 0; i <= this.everydaymealms.length; i++){
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
   everydaymealmdetials(everydaymealm){
     this.navCtrl.push('EverydaymealmdetailsPage', { "everydaymealm":everydaymealm});
   }
 }
