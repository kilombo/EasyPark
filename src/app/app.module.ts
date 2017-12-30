import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { TusVehiculosPage } from '../pages/tus-vehiculos/tus-vehiculos';
import { MapaPage } from '../pages/mapa/mapa';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContactoPage } from '../pages/contacto/contacto';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBRwoQlgFJEgnxLJhqZLUcwMfHuCI-16H4",
  authDomain: "easypark-66317.firebaseapp.com",
  databaseURL: "https://easypark-66317.firebaseio.com",
  storageBucket: "easypark-66317.appspot.com",
  messagingSenderId: '840376914687'
};

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    TusVehiculosPage,
    MapaPage,
    LoginPage,
    SignupPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    TusVehiculosPage,
    MapaPage,
    LoginPage,
    SignupPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
