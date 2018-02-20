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

  @State() userCarLatitude: number = null;
  @State() userCarLongitude: number = null;
  @State() userLatitude: number = null;
  @State() userLongitude: number = null;
  @State() uid: string = null;
  @State() userCarCoords: object = null;

  initMap() {
    let userCarCoords = { lat: this.userCarLatitude, lng: this.userCarLongitude };
    let userCoords = { lat: this.userLatitude, lng: this.userLongitude };
    if (document.getElementById('map') && userCoords.lat && userCoords.lng) {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: userCoords
      });
      if (userCarCoords.lat && userCarCoords.lng) {
        new google.maps.Marker({
          position: userCarCoords,
          icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-pushpin.png',
          map: map
        });
      }
      // let userCarInfowindow = new google.maps.InfoWindow({
      //   content: `<div>
      //           Tu coche
      //           </div>`,
      // });
      // userCarMarker.addListener('click', function () {
      //   userCarInfowindow.open(map, userCarMarker);
      // });
      db.collection('freeParkings')
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let marker = new google.maps.Marker({
              position: { lat: doc.data().latitude, lng: doc.data().longitude },
              map: map,
              icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            });
            let infowindow = new google.maps.InfoWindow({
              content: `<div>
                      <div>Creado: ${doc.data().created}</div>
                      <!--<div>uid: ${doc.data().uid}</div>
                      <div>userCar: ${doc.data().userCar}</div>-->
                      </div>`,
            });
            marker.addListener('click', function () {
              infowindow.open(map, marker);
            });
          });
        });
    }
  }

  getUserCarCoords() {
    db.collection('userCars').where('selected', '==', true).where('uid', '==', this.uid)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.userCarLatitude = doc.data().latitude;
          this.userCarLongitude = doc.data().longitude;
        });
        this.initMap();
      });
  }

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = user.uid;
        this.getLocation();

      } else {
        // User is signed out.
      }
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLatitude = position.coords.latitude;
        this.userLongitude = position.coords.longitude;
        this.getUserCarCoords();
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}
