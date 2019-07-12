import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the oTipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otip',
  templateUrl: 'otip.html',
})
export class oTipPage {

  otips : any[];
  //page: number;
  cat : any = {};

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.cat.name = "oTips";
    /*
    this.page = 1;
    let url = "";

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.cat.name = "oTips";
    if(this.navParams.get("cat")){
      this.cat = this.navParams.get("cat");
      url = "http://192.168.1.7/diet_plan/Api/otip?page="+this.page+'&cat='+this.cat.id;
    }else{
      url = "http://192.168.1.7/diet_plan/Api/otip?page="+this.page;
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
        this.otips = response;
      }
    });
    */
    this.otips = [{
      id : 1,
      name : "1. Eat varied, colorful, nutritionally dense foods",
      full_instructions : "Healthful meals and snacks should form the foundation of the human diet. A simple way to create a meal plan is to make sure that each meal consists of 50 percent fruit and vegetables, 25 percent whole grains, and 25 percent protein. Total fiber intake should be 25–30 grams (g) daily."
    },
    {
      id : 2,
      name : "2. Keep a food and weight diary",
      full_instructions : "Self-monitoring is a critical factor in successfully losing weight. People can use a paper diary, mobile app, or dedicated website to record every item of food that they consume each day. They can also measure their progress by recording their weight on a weekly basis.<br/>"+
      "<br/>"+
      "Those who can track their success in small increments and identify physical changes are much more likely to stick to a weight loss regimen.<br/>"+
      "<br/>"+
      "People can also keep track of their body mass index (BMI) using a BMI calculator.<br/>"
    },
    {
      id : 3,
      name : "3. Engage in regular physical activity and exercise",
      full_instructions : "Regular exercise is vital for both physical and mental health. Increasing the frequency of physical activity in a disciplined and purposeful way is often crucial for successful weight loss.<br/>"+
      "<br/>"+
      "One hour of moderate-intensity activity per day, such as brisk walking, is ideal. If one hour per day is not possible, the Mayo Clinic suggests that a person should aim for a minimum of 150 minutes every week.<br/>"
    },
    {
      id : 4,
      name : "4. Eliminate liquid calories",
      full_instructions : "It is possible to consume hundreds of calories a day by drinking sugar-sweetened soda, tea, juice, or alcohol. These are known as 'empty calories' because they provide extra energy content without offering any nutritional benefits.<br/>"+
      "<br/>"+
      "Unless a person is consuming a smoothie to replace a meal, they should aim to stick to water or unsweetened tea and coffee. Adding a splash of fresh lemon or orange to water can provide flavor.<br/>"+
      "<br/>"+
      "Avoid mistaking dehydration for hunger. An individual can often satisfy feelings of hunger between scheduled meal times with a drink of water.<br/>"
    },
    {
      id : 5,
      name : "5. Measure servings and control portions",
      full_instructions : "Eating too much of any food, even low-calorie vegetables, can result in weight gain.<br/>"+
      "<br/>"+
      "Therefore, people should avoid estimating a serving size or eating food directly from the packet. It is better to use measuring cups and serving size guides. Guessing leads to overestimating and the likelihood of eating a larger-than-necessary portion.<br/>"
    },
    {
      id : 6,
      name : "6. Eat mindfully",
      full_instructions : "Many people benefit from mindful eating, which involves being fully aware of why, how, when, where, and what they eat.<br/>"+
      "<br/>"+
      "Making more healthful food choices is a direct outcome of becoming more in tune with the body.<br/>"+
      "<br/>"+
      "People who practice mindful eating also try to eat more slowly and savor their food, concentrating on the taste. Making a meal last for 20 minutes allows the body to register all of the signals for satiety.<br/>"+
      "<br/>"+
      "It is important to focus on being satisfied after a meal rather than full and to bear in mind that many 'all natural' or low-fat foods are not necessarily a healthful choice.<br/>"
    },
    {
      id : 7,
      name : "7. Stimulus and cue control",
      full_instructions : "Many social and environmental cues might encourage unnecessary eating. For example, some people are more likely to overeat while watching television. Others have trouble passing a bowl of candy to someone else without taking a piece.<br/>"+
      "<br/>"+
      "By being aware of what may trigger the desire to snack on empty calories, people can think of ways to adjust their routine to limit these triggers.<br/>"
    },
    {
      id : 8,
      name : "8. Plan ahead",
      full_instructions : "Stocking a kitchen with diet-friendly foods and creating structured meal plans will result in more significant weight loss.<br/>"+
      "<br/>"+
      "People looking to lose weight or keep it off should clear their kitchen of processed or junk foods and ensure that they have the ingredients on hand to make simple, healthful meals. Doing this can prevent quick, unplanned, and careless eating.<br/>"+
      "<br/>"+
      "Planning food choices before getting to social events or restaurants might also make the process easier.<br/>"
    },
    {
      id : 9,
      name : "9. Seek social support",
      full_instructions : "Embracing the support of loved ones is an integral part of a successful weight loss journey.<br/>"+
      "<br/>"+
      "Some people may wish to invite friends or family members to join them, while others might prefer to use social media to share their progress.<br/>"
    },
    {
      id : 10,
      name : "10. Stay positive",
      full_instructions : "Weight loss is a gradual process, and a person may feel discouraged if the pounds do not drop off at quite the rate that they had anticipated.<br/>"+
      "<br/>"+
      "Some days will be harder than others when sticking to a weight loss or maintenance program. A successful weight-loss program requires the individual to persevere and not give up when self-change seems too difficult.<br/>"+
      "<br/>"+
      "Some people might need to reset their goals, potentially by adjusting the total number of calories they are aiming to eat or changing their exercise patterns.<br/>"+
      "<br/>"+
      "The important thing is to keep a positive outlook and be persistent in working toward overcoming the barriers to successful weight loss.<br/>"
    }];
  }

  otipdetials(otip){
    this.navCtrl.push('oTipdetailsPage', { "otip":otip});
  }
}
