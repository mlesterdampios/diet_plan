import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { mExercisePage } from './mexercise';

@NgModule({
  declarations: [
    mExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(mExercisePage),
  ],
})
export class mExercisePageModule {}
