import { Component, Prop, State } from '@stencil/core';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

@Component({
  tag: 'save-location-firestore',
  styleUrl: 'save-location-firestore.scss'
})
export class SaveLocationFirestore {

  @Prop() saveText: string = 'Save location';
  @State() uid: any = null;
  @State() latitude: any = null;
  @State() longitude: any = null;

  componentDidLoad(){
    this.uid = firebase.auth().currentUser.uid;
  }

  async getUserCar(uid: string) {
    let userCarRef = db.collection('userCars');
    // Create a query against the collection.
    await userCarRef.where('uid', '==', uid).where('selected', '==', true).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          return doc.id;
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  async saveCoords() {
    console.log('uid', this.uid);

    this.getUserCar(this.uid).then((carId) => {
      console.log('getUserCar finished', carId);
      db.collection('userCars').doc(carId).set({
        'latitude': this.latitude,
        'longitude': this.longitude
      })
        .then(() => {
          console.log("Document successfully updated!");
        }).catch((error) => {
          console.log("Error updating documents: ", error);
        });
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.saveCoords();
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
