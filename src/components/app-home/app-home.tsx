import { Component, Listen, State } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  @State() uid:string = null;

  @Listen('uidObtained')
  uidObtainedHandler(event: CustomEvent) {
    this.uid = event.detail;
  }

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <login-firebase></login-firebase>
          <save-location-firestore uid={this.uid}></save-location-firestore>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
