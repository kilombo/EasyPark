import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { TusVehiculosFormPage } from '../tus-vehiculos-form/tus-vehiculos-form';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-tus-vehiculos',
  templateUrl: 'tus-vehiculos.html'
})
export class TusVehiculosPage {
  private userCarsCollection: AngularFirestoreCollection<any>;
  userCars: Observable<any[]>;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, public navCtrl: NavController) {
    if (!this.afAuth.auth.currentUser) this.navCtrl.setRoot(InicioPage);
    this.userCarsCollection = db.collection<any>('userCars');
    this.userCars = this.userCarsCollection.valueChanges();
    console.log(this.userCars);
  }

  goToAddVehicle() {
    this.navCtrl.push(TusVehiculosFormPage);
  }
}
