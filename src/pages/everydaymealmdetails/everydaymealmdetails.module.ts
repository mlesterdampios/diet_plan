import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverydaymealmdetailsPage } from './everydaymealmdetails';
//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EverydaymealmdetailsPage,
    //ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(EverydaymealmdetailsPage),
    ComponentsModule
  ],
})
export class EverydaymealmdetailsPageModule {}
