import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { mCategoryPage } from './mcategory';

@NgModule({
  declarations: [
    mCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(mCategoryPage),
  ],
})
export class mCategoryPageModule {}
