import { Component } from '@stencil/core';
declare var firebase: any;

@Component({
  tag: 'login-google-firebase',
  styleUrl: 'login-google-firebase.scss'
})
export class LoginGoogleFirebase {

  login() {
    console.log(location.protocol);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  loginFacebook() {
    console.log(location.protocol);
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user',user);
      };
    });
  }

  render() {
    return (
      <container>
        <ion-button onClick={() => this.login()} expand='block' color='primary'>Login with Google</ion-button>
        <ion-button onClick={() => this.loginFacebook()} expand='block' color='primary'>Login with Facebook</ion-button>
      </container>
    );
  }
}
