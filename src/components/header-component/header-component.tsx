import { Component } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.scss'
})
export class HeaderComponent {

  render() {
    return (
      <ion-header md-height='56px'>
        <ion-toolbar color='primary'>
          <ion-grid>
            <ion-row justify-content-between>
              <ion-col col-3>
                <ion-title><stencil-route-link url='/'>EASYPARK</stencil-route-link></ion-title>
              </ion-col>
              <ion-col col-3>
                <img class="header-component-icon" src="../assets/icon/icon.png" alt="" />
              </ion-col>
              <ion-col col-3>

              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-header>
    );
  }
}
