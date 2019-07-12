import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverydaymealPage } from './everydaymeal';
//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EverydaymealPage,
    //ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(EverydaymealPage),
    ComponentsModule
  ],
})
export class EverydaymealPageModule {}
