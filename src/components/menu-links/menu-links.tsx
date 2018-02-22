import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
declare var firebase: any;

@Component({
  tag: 'menu-links',
  styleUrl: 'menu-links.scss'
})
export class MenuLinks {

  @State() uid: string = null;
  @Prop() history: RouterHistory;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.uid = user.uid;
      } else {
        // User is signed out.
        this.uid = null;
      }
    });
  }

  doLogout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.uid = null;
      // pushing a route (going forwards to a certain route)
      this.history.push('/', {});
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }

  render() {
    if (this.uid) {
      return (
        <ul text-right>
          <li><ion-button onClick={() => this.doLogout()}>Logout</ion-button></li>
          <li><stencil-route-link url='/map'>Mapa</stencil-route-link></li>
          <li><stencil-route-link url='/login'>Mi cuenta</stencil-route-link></li>
          <li><stencil-route-link url='/user-cars'>Mis coches</stencil-route-link></li>
          <li><stencil-route-link url='/contact'>Contacto</stencil-route-link></li>
        </ul>
      );
    } else {
      return (
        <ul text-right>
          <li><stencil-route-link url='/login'>Login</stencil-route-link></li>
          <li><stencil-route-link url='/register'>Register</stencil-route-link></li>
          <li><stencil-route-link url='/contact'>Contacto</stencil-route-link></li>
        </ul>
      );
    }
  }
}
