import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverydaymealodetailsPage } from './everydaymealodetails';
//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EverydaymealodetailsPage,
    //ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(EverydaymealodetailsPage),
    ComponentsModule
  ],
})
export class EverydaymealodetailsPageModule {}
