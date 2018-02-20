import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-edit-user-car',
  styleUrl: 'app-edit-user-car.scss'
})
export class AppEditUserCar {

  @Prop() match: MatchResults;
  componentDidLoad() {
    console.log('params', this.match.params);
  }
  render() {
    return (
      <ion-page>
        <header-component></header-component>
        <ion-content>
          <h1>Edit Car</h1>
          <h2>CarId: {this.match.params.car}</h2>
        </ion-content>
        <footer-component></footer-component>
      </ion-page>
    );
  }
}
