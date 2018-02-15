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
          db.collection('userCars').doc(doc.id).set({
            'latitude': this.latitude,
            'longitude': this.longitude
          }, { merge: true })
            .then(() => {
              console.log("Document successfully updated!");
            }).catch((error) => {
              console.log("Error updating documents: ", error);
            });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  async saveCoords() {
    console.log('uid', this.uid);
    this.getUserCar(this.uid);
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
