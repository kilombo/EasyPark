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
  @Prop() action: string = 'save_car_location';
  @State() uid: any = null;
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
              if(this.action === 'save_free_parking'){
                db.collection('freeParkings').add({
                  'latitude': this.latitude,
                  'longitude': this.longitude,
                  'uid': this.uid,
                  'userCar': doc.id,
                  'created': firebase.firestore.FieldValue.serverTimestamp(),
                })
                  .then(() => {
                    console.log("Free parking successfully saved!");
                  }).catch((error) => {
                    console.log("Error updating documents: ", error);
                  });
              }
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
