import { Component, State } from '@stencil/core';
declare var firebase: any;

@Component({
  tag: 'menu-links',
  styleUrl: 'menu-links.scss'
})
export class MenuLinks {

  @State() uid: any = null;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = user.uid
      } else {
        // User is signed out.
      }
    });
  }

  render() {
    if (this.uid) {
    return (
      <ul text-right>
        <li>Logout</li>
        <li><stencil-route-link url='/map'>Mapa</stencil-route-link></li>
        <li>Mi cuenta</li>
        <li><stencil-route-link url='/user-cars'>Mis coches</stencil-route-link></li>
        <li><stencil-route-link url='/contact'>Contacto</stencil-route-link></li>
      </ul>
    );
  }else{
    return (
      <ul text-right>
        <li>Login</li>
        <li><stencil-route-link url='/contact'>Contacto</stencil-route-link></li>
      </ul>
    );
  }
  }
}
