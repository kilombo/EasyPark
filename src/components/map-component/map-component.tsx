import { Component, Prop } from '@stencil/core';
import { } from '@types/googlemaps';


@Component({
  tag: 'map-component',
  styleUrl: 'map-component.scss'
})
export class MapComponent {

  @Prop() latitude:number = 39.47633030000001;
  @Prop() longitude:number = -0.34741289999999997;

  initMap() {
    let userCarCoords = {lat: this.latitude, lng: this.longitude};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: userCarCoords
    });
    new google.maps.Marker({
      position: userCarCoords,
      map: map
    });
  }
  componentDidLoad(){
    this.initMap();
  }
  render() {
    return (
      <div id="map"></div>
    );
  }
}
