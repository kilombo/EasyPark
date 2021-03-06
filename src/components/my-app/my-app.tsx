import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a
      new version available. When they click the
      reload button it then reloads the page
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}></stencil-route>
            <stencil-route url={['/profile/:name','/profile/:name/']} component='app-profile'></stencil-route>
            <stencil-route url={['/user-cars','/user-cars/']} component='app-user-cars'></stencil-route>
            <stencil-route url={['/contact','/contact/']} component='app-contact'></stencil-route>
            <stencil-route url={['/map','/map/']} component='app-map'></stencil-route>
            <stencil-route url={['/add-edit-user-car','/add-edit-user-car/']} component='app-add-edit-user-car'></stencil-route>
            <stencil-route url={['/edit-user-car/:car','/edit-user-car/:car/']} component='app-edit-user-car'></stencil-route>
            <stencil-route url={['/login','/login/']} component='app-login-firebase'></stencil-route>
            <stencil-route url={['/register','/register/']} component='app-register-firebase'></stencil-route>
          </stencil-router>
        </main>
      </ion-app>
    );
  }
}
