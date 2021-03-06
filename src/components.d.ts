/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import 'ionicons';
import '@ionic/core';

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  EventEmitter,
} from '@stencil/core';

declare global {

  namespace StencilComponents {
    interface AppAddEditUserCar {
      'history': RouterHistory;
      'match': MatchResults;
    }
  }

  interface HTMLAppAddEditUserCarElement extends StencilComponents.AppAddEditUserCar, HTMLStencilElement {}

  var HTMLAppAddEditUserCarElement: {
    prototype: HTMLAppAddEditUserCarElement;
    new (): HTMLAppAddEditUserCarElement;
  };
  interface HTMLElementTagNameMap {
    'app-add-edit-user-car': HTMLAppAddEditUserCarElement;
  }
  interface ElementTagNameMap {
    'app-add-edit-user-car': HTMLAppAddEditUserCarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-add-edit-user-car': JSXElements.AppAddEditUserCarAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAddEditUserCarAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppContact {

    }
  }

  interface HTMLAppContactElement extends StencilComponents.AppContact, HTMLStencilElement {}

  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };
  interface HTMLElementTagNameMap {
    'app-contact': HTMLAppContactElement;
  }
  interface ElementTagNameMap {
    'app-contact': HTMLAppContactElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-contact': JSXElements.AppContactAttributes;
    }
  }
  namespace JSXElements {
    export interface AppContactAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppEditUserCar {
      'match': MatchResults;
    }
  }

  interface HTMLAppEditUserCarElement extends StencilComponents.AppEditUserCar, HTMLStencilElement {}

  var HTMLAppEditUserCarElement: {
    prototype: HTMLAppEditUserCarElement;
    new (): HTMLAppEditUserCarElement;
  };
  interface HTMLElementTagNameMap {
    'app-edit-user-car': HTMLAppEditUserCarElement;
  }
  interface ElementTagNameMap {
    'app-edit-user-car': HTMLAppEditUserCarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-edit-user-car': JSXElements.AppEditUserCarAttributes;
    }
  }
  namespace JSXElements {
    export interface AppEditUserCarAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppLoginFirebase {

    }
  }

  interface HTMLAppLoginFirebaseElement extends StencilComponents.AppLoginFirebase, HTMLStencilElement {}

  var HTMLAppLoginFirebaseElement: {
    prototype: HTMLAppLoginFirebaseElement;
    new (): HTMLAppLoginFirebaseElement;
  };
  interface HTMLElementTagNameMap {
    'app-login-firebase': HTMLAppLoginFirebaseElement;
  }
  interface ElementTagNameMap {
    'app-login-firebase': HTMLAppLoginFirebaseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-login-firebase': JSXElements.AppLoginFirebaseAttributes;
    }
  }
  namespace JSXElements {
    export interface AppLoginFirebaseAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppMap {

    }
  }

  interface HTMLAppMapElement extends StencilComponents.AppMap, HTMLStencilElement {}

  var HTMLAppMapElement: {
    prototype: HTMLAppMapElement;
    new (): HTMLAppMapElement;
  };
  interface HTMLElementTagNameMap {
    'app-map': HTMLAppMapElement;
  }
  interface ElementTagNameMap {
    'app-map': HTMLAppMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-map': JSXElements.AppMapAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMapAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'match': MatchResults;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRegisterFirebase {
      'history': RouterHistory;
    }
  }

  interface HTMLAppRegisterFirebaseElement extends StencilComponents.AppRegisterFirebase, HTMLStencilElement {}

  var HTMLAppRegisterFirebaseElement: {
    prototype: HTMLAppRegisterFirebaseElement;
    new (): HTMLAppRegisterFirebaseElement;
  };
  interface HTMLElementTagNameMap {
    'app-register-firebase': HTMLAppRegisterFirebaseElement;
  }
  interface ElementTagNameMap {
    'app-register-firebase': HTMLAppRegisterFirebaseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-register-firebase': JSXElements.AppRegisterFirebaseAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRegisterFirebaseAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppUserCars {

    }
  }

  interface HTMLAppUserCarsElement extends StencilComponents.AppUserCars, HTMLStencilElement {}

  var HTMLAppUserCarsElement: {
    prototype: HTMLAppUserCarsElement;
    new (): HTMLAppUserCarsElement;
  };
  interface HTMLElementTagNameMap {
    'app-user-cars': HTMLAppUserCarsElement;
  }
  interface ElementTagNameMap {
    'app-user-cars': HTMLAppUserCarsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-user-cars': JSXElements.AppUserCarsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppUserCarsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ContactForm {

    }
  }

  interface HTMLContactFormElement extends StencilComponents.ContactForm, HTMLStencilElement {}

  var HTMLContactFormElement: {
    prototype: HTMLContactFormElement;
    new (): HTMLContactFormElement;
  };
  interface HTMLElementTagNameMap {
    'contact-form': HTMLContactFormElement;
  }
  interface ElementTagNameMap {
    'contact-form': HTMLContactFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'contact-form': JSXElements.ContactFormAttributes;
    }
  }
  namespace JSXElements {
    export interface ContactFormAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface FooterComponent {

    }
  }

  interface HTMLFooterComponentElement extends StencilComponents.FooterComponent, HTMLStencilElement {}

  var HTMLFooterComponentElement: {
    prototype: HTMLFooterComponentElement;
    new (): HTMLFooterComponentElement;
  };
  interface HTMLElementTagNameMap {
    'footer-component': HTMLFooterComponentElement;
  }
  interface ElementTagNameMap {
    'footer-component': HTMLFooterComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'footer-component': JSXElements.FooterComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface FooterComponentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface HeaderComponent {

    }
  }

  interface HTMLHeaderComponentElement extends StencilComponents.HeaderComponent, HTMLStencilElement {}

  var HTMLHeaderComponentElement: {
    prototype: HTMLHeaderComponentElement;
    new (): HTMLHeaderComponentElement;
  };
  interface HTMLElementTagNameMap {
    'header-component': HTMLHeaderComponentElement;
  }
  interface ElementTagNameMap {
    'header-component': HTMLHeaderComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'header-component': JSXElements.HeaderComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface HeaderComponentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LazyImg {
      'alt': string;
      'src': string;
    }
  }

  interface HTMLLazyImgElement extends StencilComponents.LazyImg, HTMLStencilElement {}

  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lazy-img': JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
      'src'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LoginFirebase {

    }
  }

  interface HTMLLoginFirebaseElement extends StencilComponents.LoginFirebase, HTMLStencilElement {}

  var HTMLLoginFirebaseElement: {
    prototype: HTMLLoginFirebaseElement;
    new (): HTMLLoginFirebaseElement;
  };
  interface HTMLElementTagNameMap {
    'login-firebase': HTMLLoginFirebaseElement;
  }
  interface ElementTagNameMap {
    'login-firebase': HTMLLoginFirebaseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'login-firebase': JSXElements.LoginFirebaseAttributes;
    }
  }
  namespace JSXElements {
    export interface LoginFirebaseAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LoginGoogleFirebase {

    }
  }

  interface HTMLLoginGoogleFirebaseElement extends StencilComponents.LoginGoogleFirebase, HTMLStencilElement {}

  var HTMLLoginGoogleFirebaseElement: {
    prototype: HTMLLoginGoogleFirebaseElement;
    new (): HTMLLoginGoogleFirebaseElement;
  };
  interface HTMLElementTagNameMap {
    'login-google-firebase': HTMLLoginGoogleFirebaseElement;
  }
  interface ElementTagNameMap {
    'login-google-firebase': HTMLLoginGoogleFirebaseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'login-google-firebase': JSXElements.LoginGoogleFirebaseAttributes;
    }
  }
  namespace JSXElements {
    export interface LoginGoogleFirebaseAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MapComponent {

    }
  }

  interface HTMLMapComponentElement extends StencilComponents.MapComponent, HTMLStencilElement {}

  var HTMLMapComponentElement: {
    prototype: HTMLMapComponentElement;
    new (): HTMLMapComponentElement;
  };
  interface HTMLElementTagNameMap {
    'map-component': HTMLMapComponentElement;
  }
  interface ElementTagNameMap {
    'map-component': HTMLMapComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'map-component': JSXElements.MapComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MapComponentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MenuLinks {

    }
  }

  interface HTMLMenuLinksElement extends StencilComponents.MenuLinks, HTMLStencilElement {}

  var HTMLMenuLinksElement: {
    prototype: HTMLMenuLinksElement;
    new (): HTMLMenuLinksElement;
  };
  interface HTMLElementTagNameMap {
    'menu-links': HTMLMenuLinksElement;
  }
  interface ElementTagNameMap {
    'menu-links': HTMLMenuLinksElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'menu-links': JSXElements.MenuLinksAttributes;
    }
  }
  namespace JSXElements {
    export interface MenuLinksAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyGoogleMaps {
      'addMarker': (lat: number, lng: number, created?: Date) => void;
      'apiKey': string;
      'getCenter': () => any;
    }
  }

  interface HTMLMyGoogleMapsElement extends StencilComponents.MyGoogleMaps, HTMLStencilElement {}

  var HTMLMyGoogleMapsElement: {
    prototype: HTMLMyGoogleMapsElement;
    new (): HTMLMyGoogleMapsElement;
  };
  interface HTMLElementTagNameMap {
    'my-google-maps': HTMLMyGoogleMapsElement;
  }
  interface ElementTagNameMap {
    'my-google-maps': HTMLMyGoogleMapsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-google-maps': JSXElements.MyGoogleMapsAttributes;
    }
  }
  namespace JSXElements {
    export interface MyGoogleMapsAttributes extends HTMLAttributes {
      'apiKey'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface RegisterFirebase {

    }
  }

  interface HTMLRegisterFirebaseElement extends StencilComponents.RegisterFirebase, HTMLStencilElement {}

  var HTMLRegisterFirebaseElement: {
    prototype: HTMLRegisterFirebaseElement;
    new (): HTMLRegisterFirebaseElement;
  };
  interface HTMLElementTagNameMap {
    'register-firebase': HTMLRegisterFirebaseElement;
  }
  interface ElementTagNameMap {
    'register-firebase': HTMLRegisterFirebaseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'register-firebase': JSXElements.RegisterFirebaseAttributes;
    }
  }
  namespace JSXElements {
    export interface RegisterFirebaseAttributes extends HTMLAttributes {
      'onSignUpCompleted'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SaveLocationFirestore {
      'action': string;
      'saveText': string;
    }
  }

  interface HTMLSaveLocationFirestoreElement extends StencilComponents.SaveLocationFirestore, HTMLStencilElement {}

  var HTMLSaveLocationFirestoreElement: {
    prototype: HTMLSaveLocationFirestoreElement;
    new (): HTMLSaveLocationFirestoreElement;
  };
  interface HTMLElementTagNameMap {
    'save-location-firestore': HTMLSaveLocationFirestoreElement;
  }
  interface ElementTagNameMap {
    'save-location-firestore': HTMLSaveLocationFirestoreElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'save-location-firestore': JSXElements.SaveLocationFirestoreAttributes;
    }
  }
  namespace JSXElements {
    export interface SaveLocationFirestoreAttributes extends HTMLAttributes {
      'action'?: string;
      'saveText'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface UserCars {

    }
  }

  interface HTMLUserCarsElement extends StencilComponents.UserCars, HTMLStencilElement {}

  var HTMLUserCarsElement: {
    prototype: HTMLUserCarsElement;
    new (): HTMLUserCarsElement;
  };
  interface HTMLElementTagNameMap {
    'user-cars': HTMLUserCarsElement;
  }
  interface ElementTagNameMap {
    'user-cars': HTMLUserCarsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'user-cars': JSXElements.UserCarsAttributes;
    }
  }
  namespace JSXElements {
    export interface UserCarsAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
