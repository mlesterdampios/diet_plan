import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObesePage } from './obese';

@NgModule({
	declarations: [
		ObesePage,
	],
	imports: [
		IonicPageModule.forChild(ObesePage),
	],
	exports: [
		ObesePage
	]
})
export class ObesePageModule {}