import { Component } from '@stencil/core';


@Component({
  tag: 'app-user-cars',
  styleUrl: 'app-user-cars.scss'
})
export class AppUserCars {

  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <user-cars></user-cars>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
