import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { oTipdetailsPage } from './otipdetails';

@NgModule({
  declarations: [
    oTipdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(oTipdetailsPage),
  ],
})
export class oTipdetailsPageModule {}
