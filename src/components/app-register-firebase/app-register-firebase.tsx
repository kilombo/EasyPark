import { Component } from '@stencil/core';


@Component({
  tag: 'app-register-firebase',
  styleUrl: 'app-register-firebase.scss'
})
export class AppRegisterFirebase {

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <register-firebase></register-firebase>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
