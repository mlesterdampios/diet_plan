import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { mTipPage } from './mtip';

@NgModule({
  declarations: [
    mTipPage,
  ],
  imports: [
    IonicPageModule.forChild(mTipPage),
  ],
})
export class mTipPageModule {}
