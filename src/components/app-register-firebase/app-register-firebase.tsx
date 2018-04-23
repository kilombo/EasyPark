import { Component, Prop, Listen } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-register-firebase',
  styleUrl: 'app-register-firebase.scss'
})
export class AppRegisterFirebase {

  @Prop() history: RouterHistory;

  @Listen('signUpCompleted')
  signUpCompletedHandler(event: CustomEvent) {
    console.log('Received the custom signUpCompleted event: ', event.detail);
    // replace the current nav history and reset to a certain route
    this.history.replace('/map', {});
  }

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
