import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car } from "../../models/car";

/**
 * Generated class for the TusVehiculosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tus-vehiculos-form',
  templateUrl: 'tus-vehiculos-form.html',
})
export class TusVehiculosFormPage {

  car = {} as Car;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TusVehiculosFormPage');
  }

  save(car){
    console.log(car);
  }

}
