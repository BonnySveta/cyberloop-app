import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ChartModule } from 'angular-highcharts';
import {MatSidenavModule} from '@angular/material/sidenav';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth'; 

import firebase from 'firebase/compat/app';
import firebaseui from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



var ui = new firebaseui.auth.EmailAuthProvider;


ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      
      forceSameDevice: false,
      
      emailLinkSignIn: function() {
        return {
          // Additional state showPromo=1234 can be retrieved from URL on
          // sign-in completion in signInSuccess callback by checking
          // window.location.href.
          url: 'https://www.example.com/completeSignIn?showPromo=1234',
          // Custom FDL domain.
          dynamicLinkDomain: 'example.page.link',
          // Always true for email link sign-in.
          handleCodeInApp: true,
          // Whether to handle link in iOS app if installed.
          iOS: {
            bundleId: 'com.example.ios'
          },
          // Whether to handle link in Android app if opened in an Android
          // device.
          android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
          }
        };
      }
    }
  ]
});

/*
// Is there an email link sign-in?
if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', uiConfig);
}
// This can also be done via:
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  ui.start('#firebaseui-auth-container', uiConfig);
}*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    ChartModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
