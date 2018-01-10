import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TusVehiculosFormPage } from '../tus-vehiculos-form/tus-vehiculos-form';

@Component({
  selector: 'page-tus-vehiculos',
  templateUrl: 'tus-vehiculos.html'
})
export class TusVehiculosPage {

  constructor(public navCtrl: NavController) {
  }

  goToAddVehicle() {
    this.navCtrl.push(TusVehiculosFormPage);
  }
}
