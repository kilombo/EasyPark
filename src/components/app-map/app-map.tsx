import { Component } from '@stencil/core';

@Component({
  tag: 'app-map',
  styleUrl: 'app-map.scss'
})
export class AppMap {

  render() {
    return (
      <ion-page>
        <header-component></header-component>
          <map-component></map-component>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
