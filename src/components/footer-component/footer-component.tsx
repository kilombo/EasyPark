import { Component } from '@stencil/core';


@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.scss'
})
export class FooterComponent {

  render() {
    return (
      <ion-footer>
        <ion-toolbar>
          <ion-grid>
            <ion-row>
              <ion-col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3>
                <ul>
                  <li>Aviso Legal</li>
                  <li>Política de Cookies</li>
                  <li>Página principal</li>
                  <li>Login</li>
                </ul>
              </ion-col>
              <ion-col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3>
                Contactanos
            </ion-col>
              <ion-col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3>

              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-footer>
    );
  }
}
