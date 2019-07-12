import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tip',
  templateUrl: 'tip.html',
})
export class TipPage {

  tips : any[];
  //page: number;
  cat : any = {};

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http, public toastCtrl: ToastController) {
    this.cat.name = "Tips";
    /*
    this.page = 1;
    let url = "";

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.cat.name = "Tips";
    if(this.navParams.get("cat")){
      this.cat = this.navParams.get("cat");
      url = "http://192.168.1.7/diet_plan/Api/tip?page="+this.page+'&cat='+this.cat.id;
    }else{
      url = "http://192.168.1.7/diet_plan/Api/tip?page="+this.page;
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
        this.tips = response;
      }
    });
    */
    this.tips = [{
      id : 1,
      name : "1. Stay consistent both with your activity levels and eating plan.",
      full_instructions : "We often see people use the achievement of their weight-loss goal as a sign to stop what they’re doing, celebrate and subsequently revert to their old habits. Unfortunately, that’s a recipe for weight gain. Whatever it took to help you lose the weight is the same plan that will help you keep it off—with some tweaks, of course. Remember, you no longer burn the same amount of calories that you did when you were heavier, so you’ll need to recalculate your calorie needs and make adjustments to your nutrition and/or exercise."
    },
    {
      id : 2,
      name : "2. Build those muscles.",
      full_instructions : "As stated earlier, muscle mass is directly tied to your resting metabolic rate. Having more muscle mass means your resting metabolic rate will be higher. Focusing on building muscle mass through strength or resistance training is the only way to create new, metabolically active muscle tissue. For weight maintenance, weight training becomes just as, if not more, important as aerobic conditioning."
    },
    {
      id : 3,
      name : "3. Continue to set goals.",
      full_instructions : "We encourage you to set both long-term and short-term goals and make sure that they are both realistic and achievable. Goals can be about exercise (trying something new), nutrition (have a go at changing up macronutrient percentages, cut out sugar, or stick with a whole-food diet) or training for a race. You might also consider setting goals outside the diet and exercise realm, such as booking an adventure vacation. When you are having fun and are happy, you reduce your production of the stress hormone cortisol, making you more likely to be successful with maintaining your weight."
    },
    {
      id : 4,
      name : "4. Practice mindful and intuitive eating.",
      full_instructions : "Mindful eating means that you are present when you eat—no television, emails, Facebook or surfing the web. When you are focused on your meal, you can notice the taste, texture, temperature and aroma of it and really find enjoyment with what you are eating. You will be more likely to walk away from that meal feeling full and satisfied. Being an intuitive eater means that you are listening to your body’s signals when it comes to being hungry and full. You eat when you are hungry (not waiting until you are ravenous), and stop when you are full (about 80 percent full), but not stuffed."
    },
    {
      id : 5,
      name : "5. Have a plan.",
      full_instructions : "You know the saying, “Failing to plan is planning to fail.” Plan out your week—each day’s workout, as well as what meals you will be preparing and eating. Having a plan means you will more likely stick to it and be successful."
    },
    {
      id : 6,
      name : "6. Come up with a list of non-food coping strategies.",
      full_instructions : "Emotional eating causes many people to turn to food when they are feeling sad, angry, frustrated, disappointed, bored, lonely or even happy. And the foods most people typically reach for are salty, crunchy, fatty foods and sweets. When you are in an emotionally neutral state, come up with a list of non-food coping mechanisms that can make you feel better. Try singing, dancing, a short burst of exercise, taking a walk, calling a friend or our personal favorite, laughter therapy. Find some funny video clips to watch and once you start laughing, the stress hormones quickly recede and it becomes easier to feel better."
    },
    {
      id : 7,
      name : "7. Find support.",
      full_instructions : "Nothing feels more difficult than going through something alone. If your weight-loss journey was a solo trek, reaching out to others, especially people who are going through the same thing, can be both comforting and rewarding. You need to be able to open up and express your thoughts and feelings to like-minded people. You’ll be amazed at the great ideas you’ll come away with, as well as an increased sense of motivation."
    },
    {
      id : 8,
      name : "8. Eat real, whole, clean food.",
      full_instructions : "Once you achieve your goal weight, you might find yourself a little lax when it comes to your diet. A piece of chocolate cake, a slice of pizza and an extra glass of wine can really add up quickly. Remember what got you to your goal weight in the first place—a sound eating plan. Ditching the refined, processed food and replacing it with real, whole, clean foods, such as vegetables, fruits, lean proteins, healthy fats, clean complex carbs and plenty of water and green tea, can get you back on track for success."
    },
    {
      id : 9,
      name : "9. Stay within 3 pounds of your maintenance weight.",
      full_instructions : "While we don’t believe in being slaves to the scale, a once-a-week weigh-in should be enough to make sure you are staying on track. If the scale indicates more than a 3-pound gain, it’s time to check in with yourself and assess what you’ve been doing differently. Are you keeping food records? Do you get enough sleep? How’s your stress level? All of these factors play a role in weight gain."
    },
    {
      id : 10,
      name : "10. Setbacks happen.",
      full_instructions : "You travel for business or pleasure, attend parties and have holiday gatherings—all of which typically mean an abundance of food is available. Again, have a plan for handling these food environments to your advantage. But if you do slip up and decide to overindulge at the buffet, that’s O.K. Learn how to move past it and go right back to your consistent new lifestyle."
    },
    {
      id : 11,
      name : "11. Stay hydrated.",
      full_instructions : "Did you know that most of the time you think you’re hungry, you’re actually thirsty? Next time you find yourself with the munchies, go drink 12 ounces of water and wait 15 minutes. You might have just solved the problem. However, if you find yourself physically hungry go ahead and eat. As for how much water you should be drinking each day, a general rule is to drink (in ounces) half of your body weight (in pounds). For example, if you weigh 150 pounds (150 x 1/2 = 75), you need to drink 75 ounces (approximately 10 cups of water). Add 1 cup if you live in a hot climate and another cup when exercising and sweating."
    },
    {
      id : 12,
      name : "12. Practice stress management.",
      full_instructions : "Stress plays a big role in weight regain. The main stress hormone is cortisol and when it is high, due to stress, it causes your body to become more insulin resistant. Insulin is a fat-storage hormone, so the more you have floating around your bloodstream, the more fat you are likely to store, especially around your abdominal region. Stress-management techniques can be as simple as taking a few one-minute breaks during the day during which you close your eyes and practice deep breathing. If you have more time, try longer stretches of meditation or breathing exercises. Again, laughter therapy is a great way to deal with stress."
    },
    {
      id : 13,
      name : "13. Sleep seven to nine hours each night.",
      full_instructions : "There is ample scientific evidence about the role that sleep plays in weight. When you sleep fewer than seven hours per night, there is a disruption in the production of two main hormones that control hunger and fullness. Poor sleep causes your brain to produce more ghrelin, which makes you feel hungrier, and less leptin, which helps make you feel full. So now you’re feeling hungry all the time. And who wants a salad when you’re tired and hungry? This is what it’s like when ghrelin and leptin are out of whack. Proper sleep keeps these hormones at proper levels and hunger and fullness are back to normal."
    }];
  }

  tipdetials(tip){
    this.navCtrl.push('TipdetailsPage', { "tip":tip});
  }
}
