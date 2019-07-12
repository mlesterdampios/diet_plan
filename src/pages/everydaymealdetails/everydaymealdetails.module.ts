import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverydaymealdetailsPage } from './everydaymealdetails';
//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EverydaymealdetailsPage,
    //ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(EverydaymealdetailsPage),
    ComponentsModule
  ],
})
export class EverydaymealdetailsPageModule {}
