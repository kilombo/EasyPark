import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Car } from "../../models/car";
import { InicioPage } from '../inicio/inicio';
import { TusVehiculosPage } from '../tus-vehiculos/tus-vehiculos';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

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
  private userCarsCollection: AngularFirestoreCollection<any>;
  private userCarsDocument: AngularFirestoreDocument<any>;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    if (!this.afAuth.auth.currentUser) this.navCtrl.setRoot(InicioPage);
    this.userCarsCollection = db.collection<any>('userCars');
    console.log(this.userCarsCollection);
    this.userCarsDocument = db.doc<any>('userCars/'+this.afAuth.auth.currentUser.uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TusVehiculosFormPage');
  }

  save(car) {
    console.log(car);
    // Check:https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/

    let userCar = {
      brand: car.brand,
      model: car.model
    };

    this.userCarsDocument.update(userCar).then(()=>{
      this.navCtrl.setRoot(TusVehiculosPage);
    });
  }

}
