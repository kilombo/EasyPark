import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Car } from "../../models/car";
import { InicioPage } from '../inicio/inicio';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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



  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    if (!this.afAuth.auth.currentUser) this.navCtrl.setRoot(InicioPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TusVehiculosFormPage');
  }

  save(car) {
    console.log(car);
// Check:https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/
    // const collection: AngularFirestoreCollection<Car> = this.db.collection(this.afAuth.auth.currentUser.uid);
    let userCar = {
      brand: car.brand,
      model: car.model
    };
    this.db.set(this.afAuth.auth.currentUser.uid, userCar);

  }

}
