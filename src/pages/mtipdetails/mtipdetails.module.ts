import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { mTipdetailsPage } from './mtipdetails';

@NgModule({
  declarations: [
    mTipdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(mTipdetailsPage),
  ],
})
export class mTipdetailsPageModule {}
