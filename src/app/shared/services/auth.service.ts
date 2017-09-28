import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  authState: any;

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.angularFireAuth.authState.subscribe(auth => this.authState = auth);
   }

   get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  anonymousLogin() {
    return this.angularFireAuth.auth.signInAnonymously()
    .then((user) => {
      this.authState = user;
      console.log(user.uid);
    })
    .catch(error => console.log(error));
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.authState = null;
    })
    .catch(error => console.log(error));;
  }

  googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.angularFireAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
      })
      .catch(error => console.log(error));
  }
}
