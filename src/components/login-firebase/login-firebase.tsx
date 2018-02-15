import { Component, State } from '@stencil/core';
declare var firebase: any;

@Component({
  tag: 'login-firebase',
  styleUrl: 'login-firebase.scss'
})
export class LoginFirebase {

  @State() email: string = null;
  @State() password: string = null;
  @State() userLogged: boolean = false;
  @State() showResetPassword: boolean = false;

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handlePasswordChange(event) {
    this.password = event.target.value;
  }

  componentDidLoad() {
    this.showResetPassword = false;
    if (firebase.auth().currentUser) {
      this.userLogged = true;
    }
  }

  doLogin() {
    console.log('doing login');
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.userLogged = true;
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  }

  doLogout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.userLogged = false;;
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }

  doResetPassword() {
    console.log(this.email);
    firebase.auth().sendPasswordResetEmail(this.email)
      .then(() => {
        console.log(`Reset Password Email Sent to: ${this.email}`);
      }).catch((error) => {
        console.error(error);
      });
  }

  doShowResetPassword(event){
    event.preventDefault();
    this.showResetPassword = true;
  }

  doCancelReset(){
    this.showResetPassword = false;
  }

  render() {
    if (!this.userLogged && !this.showResetPassword) {
      return (
        <container>
          <ion-grid>
            <ion-row>
              <ion-col col-6>
                <ion-item>
                  <ion-input type="email" placeholder="Email" value={this.email} onInput={(event) => this.handleEmailChange(event)}></ion-input>
                </ion-item>
                <div class="login-firebase-links" text-center>
                  <a href="">¡No estoy registrado y quiero registrarme!</a>
                  <a href="" onClick={(event) => this.doShowResetPassword(event)}>¿Has olvidado tu contraseña?</a>
                </div>
              </ion-col>
              <ion-col col-6>
                <ion-item>
                  <ion-input type="password" placeholder="Password" value={this.password} onInput={(event) => this.handlePasswordChange(event)}></ion-input>
                </ion-item>
                <ion-button float-right onClick={() => this.doLogin()}>Acceder</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </container>
      );
    }
    if (this.userLogged) {
      return (
        <container>
          <h2>Hola {firebase.auth().currentUser.email}</h2>
          <ion-button onClick={() => this.doLogout()}>Cerrar sesión</ion-button>
        </container>
      );
    }
    if (this.showResetPassword) {
      return (
        <container>
          <ion-item>
            <ion-input type="email" placeholder="Email" value={this.email} onInput={(event) => this.handleEmailChange(event)}></ion-input>
          </ion-item>
          <ion-button onClick={() => this.doResetPassword()}>Recuperar</ion-button>
          <ion-button onClick={() => this.doCancelReset()}>Cancelar</ion-button>
        </container>
      );
    }
  }
}
