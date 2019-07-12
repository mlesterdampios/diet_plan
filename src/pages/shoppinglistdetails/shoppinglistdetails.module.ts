import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppinglistdetailsPage } from './shoppinglistdetails';

@NgModule({
  declarations: [
    ShoppinglistdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppinglistdetailsPage),
  ],
})
export class ShoppinglistdetailsPageModule {}
