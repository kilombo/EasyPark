import { Component, State, Prop } from '@stencil/core';
import { ToastController } from '@ionic/core';
import { } from '@types/googlemaps';
import moment from 'moment';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();


let map;

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
  @State() now: any;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  initMap() {
    let userCoords = { lat: this.userLatitude, lng: this.userLongitude };
    if (document.getElementById('map') && userCoords.lat && userCoords.lng) {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: userCoords
      });
      let queryTime = moment().subtract(15, 'minutes');;
      db.collection('freeParkings')
        .where('created', '>', queryTime.toDate())
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
      db.collection('userCars').where('uid', '==', this.uid)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let carData = doc.data();
            if (carData.latitude && carData.longitude) {
              let marker = new google.maps.Marker({
                position: { lat: doc.data().latitude, lng: doc.data().longitude },
                map: map,
                icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-pushpin.png',
              });
              let infoWindowContent;
              if (carData.updated) {
                infoWindowContent = `
                <div>Tu coche: ${carData.brand} ${carData.model}</div>
                <div>Aparcado: ${carData.updated}</div>
                `;
              } else {
                infoWindowContent = `
                <div>Tu coche: ${carData.brand} ${carData.model}</div>
                `;
              }
              let infowindow = new google.maps.InfoWindow({
                content: infoWindowContent,
              });
              marker.addListener('click', function () {
                infowindow.open(map, marker);
              });
            }
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
    this.now = moment().format('LLLL');

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

  async centerMapUserCar() {
    if(!this.userCarLatitude || !this.userCarLongitude){
      const toast = await this.toastCtrl.create({ message: 'No car coords', duration: 1000 });
      toast.present();
    }else{
      map.setCenter({ lat: this.userCarLatitude, lng: this.userCarLongitude });
    }
  }

  render() {
    return (
      <container>
        <div id="map"></div>
        <ion-button onClick={() => this.centerMapUserCar()}>Centrar mapa en mi coche</ion-button>
      </container>

    );
  }
}
