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
              <ion-col col-12>
                <menu-links></menu-links>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-footer>
    );
  }
}
