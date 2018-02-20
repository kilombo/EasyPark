import { Component, State } from '@stencil/core';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

@Component({
  tag: 'user-cars',
  styleUrl: 'user-cars.scss'
})
export class UserCars {

  @State() items: any = [];
  @State() uid: string = null;

  getItems() {
    db.collection('userCars').where('uid', '==', this.uid)
      .onSnapshot((querySnapshot) => {
        this.items = [];
        let item = {};
        querySnapshot.forEach((doc) => {
          item = {
            'carId': doc.id,
            'info': doc.data()
          };
          if (this.items) {
            this.items = [...this.items, item];
          } else {
            this.items = [item];
          }
        });
      });
  }

  componentDidLoad() {
    if (firebase.auth().currentUser) {
      this.uid = firebase.auth().currentUser.uid;
    }
    this.getItems();
  }

  removeCar(carId) {
    db.collection('userCars').doc(carId).delete().then(()=>{
      console.log('userCar removed');
    }).catch((error)=>{console.error(error)});
  }

  selectCar(carId) {
    console.log('selectCar', carId);
    // Unselect the current Car.
    db.collection('userCars').where('selected', '==', true).where('uid', '==', this.uid)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          db.collection('userCars').doc(doc.id).set({
            'selected': false
          }, { merge: true })
            .then(() => {
              db.collection('userCars').doc(carId).set({
                'selected': true
              }, { merge: true })
                .then(() => {
                  console.log("Document successfully updated!");
                }).catch((error) => {
                  console.log("Error updating documents: ", error);
                });
            }).catch((error) => {
              console.log("Error updating documents: ", error);
            });
        });
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  render() {
    return (
      <container>
        <ion-list>
          {this.items.map((item) =>
            <ion-item-sliding>
              <ion-item>
                <ion-avatar item-start><img src="assets/icon/icon.png" /></ion-avatar>
                <div item-content>
                  <h2>{item.info.brand}</h2>
                  <h3>{item.info.model}</h3>
                </div>
                {item.info.selected
                  ? <div item-end><ion-icon name="car"></ion-icon> Seleccionado</div>
                  : <div item-end></div>
                }
              </ion-item>
              <ion-item-options side="right">
                {item.info.selected
                  ? null
                  : <button ion-button color="primary" onClick={() => this.selectCar(item.carId)}><ion-icon name="checkmark"></ion-icon> Seleccionar</button>
                }
                <button ion-button color="primary" onClick={() => this.removeCar(item.carId)}><ion-icon name="remove"></ion-icon> Eliminar</button>
              </ion-item-options>
            </ion-item-sliding>
          )}
        </ion-list>
        <stencil-route-link url='/add-edit-user-car'><ion-button>Añadir coche</ion-button></stencil-route-link>
      </container>
    );
  }
}
