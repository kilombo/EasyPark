import { Component } from '@stencil/core';


@Component({
  tag: 'menu-links',
  styleUrl: 'menu-links.scss'
})
export class MenuLinks {

  render() {
    return (
      <ul>
        <li>Login</li>
        <li>Logout</li>
        <li><stencil-route-link url='/map'>Mapa</stencil-route-link></li>
        <li>Mi cuenta</li>
        <li><stencil-route-link url='/user-cars'>Mis coches</stencil-route-link></li>
        <li><stencil-route-link url='/add-user-car'>Añadir coche</stencil-route-link></li>
        <li><stencil-route-link url='/contact'>Contacto</stencil-route-link></li>
      </ul>
    );
  }
}
