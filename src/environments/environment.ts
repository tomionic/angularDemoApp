// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IonicAuthOptions } from "@ionic-enterprise/auth";

export const auth0Config: IonicAuthOptions = {
  authConfig: 'auth0',
  clientID: 'sCYfHfnZJx9qE1QqJ0yP4f7Dp0DJfV5y',
  discoveryUrl: 'https://dev-vnzxiqpe.us.auth0.com/.well-known/openid-configuration',
  logoutUrl: '',
  scope: 'openid email picture profile',
  audience: 'https://api.demo-app.com',
  logLevel: 'DEBUG',
};

export const mobileAuth0Config: IonicAuthOptions = {
  ...auth0Config,
  redirectUri: 'msauth://login',
  logoutUrl: 'msauth://login',
  platform: 'capacitor',
  iosWebView: 'private',
};

export const webAuth0Config: IonicAuthOptions = {
  ...auth0Config,
  redirectUri:'http://localhost:8100/tabs/tab1',
  logoutUrl: 'http://localhost:8100/tabs/tab1',
  platform: 'web',
};


export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
