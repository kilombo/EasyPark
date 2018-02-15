import { Component, Prop, State, Listen } from '@stencil/core';
// declare var firebase: any;

@Component({
  tag: 'save-location-firestore',
  styleUrl: 'save-location-firestore.scss'
})
export class SaveLocationFirestore {

  @Prop() saveText:string = 'Save location';
  @Prop() uid:any = null;
  @State() latitude:any = null;
  @State() longitude:any = null;

  @Listen('uidObtained')
  uidObtainedHandler(event: CustomEvent) {
    console.log('Received the custom uidObtained event: ', event.detail);
  }

  saveCoords(){
    console.log('Saving coords on Firestore');
    console.log(this.uid);
  }

  render() {
    return (
      <container>
        <ion-button onClick={() => this.saveCoords()}>{this.saveText}</ion-button>
      </container>
    );
  }
}
