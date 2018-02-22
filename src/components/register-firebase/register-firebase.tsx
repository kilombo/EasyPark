import { Component, State, Event, EventEmitter  } from '@stencil/core';
declare var firebase: any;

@Component({
  tag: 'register-firebase',
  styleUrl: 'register-firebase.scss'
})
export class RegisterFirebase {
  @State() email: string = null;
  @State() password: string = null;
  @State() userLogged: boolean = false;
  @State() uid: string;
  @Event() signUpCompleted: EventEmitter;

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handlePasswordChange(event) {
    this.password = event.target.value;
  }

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.userLogged = true;
      } else {
        // User is signed out.
        this.userLogged = false;
      }
    });
  }

  doRegister() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        this.userLogged = true;
        this.uid = data.uid;
        this.signUpCompleted.emit(data.uid);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  }

  render() {
    return (
      <container>
          <ion-grid>
            <ion-row>
              <ion-col col-6>
                <ion-item>
                  <ion-input type="email" placeholder="Email" value={this.email} onInput={(event) => this.handleEmailChange(event)}></ion-input>
                </ion-item>
              </ion-col>
              <ion-col col-6>
                <ion-item>
                  <ion-input type="password" placeholder="Password" value={this.password} onInput={(event) => this.handlePasswordChange(event)}></ion-input>
                </ion-item>
                <ion-button float-right onClick={() => this.doRegister()}>Acceder</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </container>
    );
  }
}
