import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TusVehiculosFormPage } from '../tus-vehiculos-form/tus-vehiculos-form';
import {InicioPage} from '../inicio/inicio';

@Component({
  selector: 'page-tus-vehiculos',
  templateUrl: 'tus-vehiculos.html'
})
export class TusVehiculosPage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {
    if(!this.afAuth.auth.currentUser) this.navCtrl.setRoot(InicioPage);
  }

  goToAddVehicle() {
    this.navCtrl.push(TusVehiculosFormPage);
  }
}
