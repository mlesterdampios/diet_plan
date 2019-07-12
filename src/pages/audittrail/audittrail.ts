import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AudittrailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audittrail',
  templateUrl: 'audittrail.html',
})
export class AudittrailPage {
  audittrails : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public storage: Storage) {

    this.storage.get("audittrail").then((pAudittrail)=>{
      if(pAudittrail != null){
        this.audittrails = pAudittrail;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudittrailPage');
  }

}
