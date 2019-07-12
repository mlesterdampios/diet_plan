import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MalnourishedPage } from './malnourished';

@NgModule({
	declarations: [
		MalnourishedPage,
	],
	imports: [
		IonicPageModule.forChild(MalnourishedPage),
	],
	exports: [
		MalnourishedPage
	]
})
export class MalnourishedPageModule {}