import { Component, State } from '@stencil/core';
declare var firebase: any;

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.scss'
})
export class FooterComponent {
  @State() uid: string = null;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = user.uid;
      } else {
        // User is signed out.
        this.uid = null;
      }
    });
  }

  render() {
    if (this.uid) {
      return (
        <ion-footer>
          <ion-toolbar color="primary">
            <ion-grid>
              <ion-row>
                <ion-col col-6>
                  <save-location-firestore save-text="Aparcar"></save-location-firestore>
                </ion-col>
                <ion-col col-6 text-right>
                  <save-location-firestore save-text="Desaparcar" action="save_free_parking"></save-location-firestore>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-toolbar>
        </ion-footer>
      );
    } else {
      return (
        <ion-footer>
          <ion-toolbar color="primary">
            <h3 text-center>EasyPark</h3>
          </ion-toolbar>
        </ion-footer>
      );
    }
  }
}
