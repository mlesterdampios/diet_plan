import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverydaymealmPage } from './everydaymealm';
//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EverydaymealmPage,
    //ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(EverydaymealmPage),
    ComponentsModule
  ],
})
export class EverydaymealmPageModule {}
