import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { oCategoryPage } from './ocategory';

@NgModule({
  declarations: [
    oCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(oCategoryPage),
  ],
})
export class oCategoryPageModule {}
