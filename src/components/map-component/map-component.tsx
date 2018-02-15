import { Component, State } from '@stencil/core';
import { } from '@types/googlemaps';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

@Component({
  tag: 'map-component',
  styleUrl: 'map-component.scss'
})
export class MapComponent {

  @State() latitude: number = null;
  @State() longitude: number = null;
  @State() uid: string = null;
  @State() userCarCoords: object = null;

  initMap() {
    let userCarCoords = { lat: this.latitude, lng: this.longitude };
    if (document.getElementById('map') && userCarCoords.lat) {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: userCarCoords
      });
      new google.maps.Marker({
        position: userCarCoords,
        map: map
      });
    }

  }

  getUserCarCoords() {
    db.collection('userCars').where('selected', '==', true).where('uid', '==', this.uid)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.longitude = doc.data().longitude;
          this.latitude = doc.data().latitude;
          this.initMap();
        });
      });
  }

  async componentDidLoad() {
    this.uid = await firebase.auth().currentUser.uid;
    this.getUserCarCoords();
  }
  render() {
    return (
      <div id="map"></div>
    );
  }
}
