import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipdetailsPage } from './tipdetails';

@NgModule({
  declarations: [
    TipdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TipdetailsPage),
  ],
})
export class TipdetailsPageModule {}
