import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { newBmicalculatorPage } from './newbmicalculator';

@NgModule({
  declarations: [
    newBmicalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(newBmicalculatorPage),
  ],
})
export class newBmicalculatorPageModule {}
