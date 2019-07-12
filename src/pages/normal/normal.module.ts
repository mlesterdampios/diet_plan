import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalPage } from './normal';

@NgModule({
	declarations: [
		NormalPage,
	],
	imports: [
		IonicPageModule.forChild(NormalPage),
	],
	exports: [
		NormalPage
	]
})
export class NormalPageModule {}