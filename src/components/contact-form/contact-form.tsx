import { Component, State } from '@stencil/core';
declare var firebase: any;

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss'
})
export class ContactForm {

  @State() name: string;
  @State() email: string;
  @State() comments: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log('name:', this.name);
    console.log('email:', this.email);
    console.log('comments:', this.comments);
    // send data to our backend

    if (this.name && this.email && this.comments) {
      db.collection('contactMessages').add({
        'name': this.name,
        'email': this.email,
        'comments': this.comments,
        'created': firebase.firestore.FieldValue.serverTimestamp(),
      })
        .then(() => {
          console.log("Document successfully updated!");
        }).catch((error) => {
          console.log("Error updating documents: ", error);
        });
    } else {
      console.error('Error on data');
    }
  }

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handleCommentsChange(event) {
    this.comments = event.target.value;
  }



  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Hola {this.name}</h2>
        <ion-list>
          <ion-item>
            <ion-label floating>Nombre</ion-label>
            <ion-input type="text" value={this.name} onInput={() => this.handleNameChange(event)} required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label floating>Email</ion-label>
            <ion-input type="email" value={this.email} onInput={() => this.handleEmailChange(event)} required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label floating>Comentarios</ion-label>
            <ion-textarea value={this.comments} onInput={() => this.handleCommentsChange(event)} required></ion-textarea>
          </ion-item>
        </ion-list>
        <ion-button onClick={(event: UIEvent) => this.handleSubmit(event)}>Send</ion-button>
      </form>
    );
  }
}
