import { Component, State, Prop } from '@stencil/core';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

@Component({
  tag: 'user-cars',
  styleUrl: 'user-cars.scss'
})
export class UserCars {

  @State() items: any = [];
  @Prop() uid: string = null;

  getItems() {
    db.collection('userCars').where('uid', '==', this.uid)
      .onSnapshot((querySnapshot) => {
        this.items = [];
        querySnapshot.forEach((doc) => {
          this.items = [...this.items, doc.data()];
        });
      });
  }

  componentDidLoad() {
    this.getItems();
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
                  <h2>{item.brand}</h2>
                  <h3>{item.model}</h3>
                </div>
                {item.selected
                  ? <div item-end><ion-icon name="car"></ion-icon> Seleccionado</div>
                  : <div item-end></div>
                }
              </ion-item>
              <ion-item-options side="right">
                {item.selected
                  ? null
                  : <button ion-button color="primary"><ion-icon name="checkmark"></ion-icon> Seleccionar</button>
                }
                <button ion-button color="primary"><ion-icon name="remove"></ion-icon> Eliminar</button>
              </ion-item-options>
            </ion-item-sliding>
          )}
        </ion-list>
      </container>
    );
  }
}
