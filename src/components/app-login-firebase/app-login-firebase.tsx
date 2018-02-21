import { Component } from '@stencil/core';


@Component({
  tag: 'app-login-firebase',
  styleUrl: 'app-login-firebase.scss'
})
export class AppLoginFirebase {

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <login-firebase></login-firebase>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
