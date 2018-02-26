import { Component, Prop, State } from '@stencil/core';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

const userCarRef = db.collection('userCars');

@Component({
  tag: 'save-location-firestore',
  styleUrl: 'save-location-firestore.scss'
})
export class SaveLocationFirestore {

  @Prop() saveText: string = 'Save location';
  @Prop() action: string = 'save_car_location';
  @State() uid: any = null;
  @State() userCarId: any = null;
  @State() latitude: any = null;
  @State() longitude: any = null;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = user.uid
      } else {
        // User is signed out.
      }
    });
  }

  async getUserCar(uid: string) {
    console.log('getting user car');
    await userCarRef.where('uid', '==', uid).where('selected', '==', true).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
          this.userCarId = doc.id;
          db.collection('userCars').doc(doc.id).set({
            'latitude': this.latitude,
            'longitude': this.longitude,
            'updated': firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true })
            .then().catch((error) => {
              console.log("Error updating documents: ", error);
            });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  saveFreeParking() {
    console.log('saving parking');
    db.collection('freeParkings').add({
      'latitude': this.latitude,
      'longitude': this.longitude,
      'uid': this.uid,
      'created': firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(() => {
        console.log("Free parking successfully saved!");
        userCarRef.where('uid', '==', this.uid).where('selected', '==', true).get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.userCarId = doc.id;
            });
            db.collection('userCars').doc(this.userCarId).set({
              'latitude': null,
              'longitude': null,
              'updated': firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true })
              .then().catch((error) => {
                console.log("Error updating documents: ", error);
              });
          });
      }).catch((error) => {
        console.log("Error updating documents: ", error);
      });
  }

  async saveCoords() {
    console.log('uid', this.uid);
    if (this.action !== 'save_free_parking') {
      this.getUserCar(this.uid);
    }
    if (this.action === 'save_free_parking') {
      this.saveFreeParking();
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position);
        this.saveCoords();
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  render() {
    if (this.uid) {
      return (
        <container>
          <ion-button onClick={() => this.getLocation()}>{this.saveText}</ion-button>
        </container>
      );
    } else {
      return (null);
    }
  }
}
