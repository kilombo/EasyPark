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
          <ion-grid>
            <ion-row>
              <ion-col col-12 text-center>
                EasyPark es una aplicación para ayudarnos entre todos los conductores a encontrar aparcamiento.
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
