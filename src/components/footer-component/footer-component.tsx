import { Component } from '@stencil/core';


@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.scss'
})
export class FooterComponent {

  render() {
    return (
      <ion-footer>
        <ion-toolbar color="primary">
          <ion-grid>
            <ion-row>
              <ion-col col-6>
              <save-location-firestore save-text="Aparcar"></save-location-firestore>
              </ion-col>
              <ion-col col-6 text-right>
              <save-location-firestore save-text="Desaparcar" action="save_free_parking"></save-location-firestore>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-footer>
    );
  }
}
