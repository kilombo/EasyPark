import { Component } from '@stencil/core';


@Component({
  tag: 'app-contact',
  styleUrl: 'app-contact.scss'
})
export class AppContact {

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <contact-form></contact-form>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
