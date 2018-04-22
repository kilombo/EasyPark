import { Component, State, Prop } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const userCarRef = db.collection('userCars');

@Component({
  tag: 'app-add-edit-user-car',
  styleUrl: 'app-add-edit-user-car.scss'
})
export class AppAddEditUserCar {

  @State() brand: string;
  @State() model: string;
  @State() uid: string;
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  componentDidLoad() {
    // console.log(this.match.params);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = user.uid;
      }
    });
  }

  handleBrandChange(event) {
    this.brand = event.target.value;
  }

  handleModelChange(event) {
    this.model = event.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.brand && this.model) {
      // Removing old selected
      userCarRef.where('uid', '==', this.uid).where('selected', '==', true).get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            this.saveUserCar();
          }
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            userCarRef.doc(doc.id).set({
              'selected': false,
            }, { merge: true })
              .then(() => {
                this.saveUserCar();
              }).catch((error) => {
                console.log("Error updating documents: ", error);
              });
          });
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
    } else {
      console.error('Error on data');
    }
  }

  saveUserCar() {
    // Save new car
    userCarRef.doc().set({
      'brand': this.brand,
      'model': this.model,
      'selected': true,
      'created': firebase.firestore.FieldValue.serverTimestamp(),
      'uid': this.uid,
    })
      .then(() => {
        // Redirect to user cars page.
        this.history.goBack();
      }).catch((error) => {
        console.log("Error updating documents: ", error);
      });
  }

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <ion-list>
              <ion-item>
                <ion-label>Marca</ion-label>
                <ion-input type="text" value={this.brand} onInput={() => this.handleBrandChange(event)} required></ion-input>
              </ion-item>
              <ion-item>
                <ion-label>Modelo</ion-label>
                <ion-input type="text" value={this.model} onInput={() => this.handleModelChange(event)} required></ion-input>
              </ion-item>
            </ion-list>
            <ion-button onClick={(event: UIEvent) => this.handleSubmit(event)}>Guardar</ion-button>
          </form>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
