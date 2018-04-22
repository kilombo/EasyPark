import { Component, State } from '@stencil/core';
import { } from '@types/googlemaps';
// import moment from 'moment';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

@Component({
  tag: 'app-map',
  styleUrl: 'app-map.scss'
})
export class AppMap {

  private mapComponent;

  @State() userCarLatitude: number = null;
  @State() userCarLongitude: number = null;
  @State() userLatitude: number = null;
  @State() userLongitude: number = null;
  @State() uid: string = null;
  @State() userCarCoords: object = null;
  @State() now: any;

  componentDidLoad() {
    this.mapComponent = document.querySelector('my-google-maps');
    // let queryTime = moment().subtract(15, 'minutes');
    db.collection('freeParkings')
      // .where('created', '>', queryTime.toDate())
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            this.mapComponent.addMarker(doc.data().latitude, doc.data().longitude);
        });
    });
  }

  testMarker() {
    let center = this.mapComponent.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());
  }

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <map-component></map-component>
        <div class='map-container'>
          {/* <my-google-maps apiKey="AIzaSyAaXzgnOaZvr_vPUlpctfC25y9aFp16GXE"></my-google-maps> */}
        </div>
        {/* <button onClick={() => this.testMarker()}>
          Add Marker
        </button> */}
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
