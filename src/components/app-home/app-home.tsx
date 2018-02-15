import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <login-firebase></login-firebase>
          <save-location-firestore></save-location-firestore>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
