import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { oTipPage } from './otip';

@NgModule({
  declarations: [
    oTipPage,
  ],
  imports: [
    IonicPageModule.forChild(oTipPage),
  ],
})
export class oTipPageModule {}
