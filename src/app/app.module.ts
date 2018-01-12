import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { TusVehiculosPage } from '../pages/tus-vehiculos/tus-vehiculos';
import { TusVehiculosFormPage } from '../pages/tus-vehiculos-form/tus-vehiculos-form';
import { MapaPage } from '../pages/mapa/mapa';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ContactoPage } from '../pages/contacto/contacto';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBRwoQlgFJEgnxLJhqZLUcwMfHuCI-16H4",
  authDomain: "easypark-66317.firebaseapp.com",
  databaseURL: "https://easypark-66317.firebaseio.com",
  storageBucket: "easypark-66317.appspot.com",
  projectId: "easypark-66317",
  messagingSenderId: '840376914687'
};

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    TusVehiculosPage,
    TusVehiculosFormPage,
    MapaPage,
    LoginPage,
    RegisterPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    TusVehiculosPage,
    TusVehiculosFormPage,
    MapaPage,
    LoginPage,
    RegisterPage,
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
