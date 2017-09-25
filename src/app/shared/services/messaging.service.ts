import { Injectable, Inject } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class MessagingService {

  firebaseApp: FirebaseApp;
  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor(
    private database: AngularFireDatabase,
    @Inject(FirebaseApp) firebaseApp: FirebaseApp,
    private snackbar: MdSnackBar
  ) { 
    this.firebaseApp = firebaseApp;
   }

  getPermission(uid) {
    this.messaging.requestPermission()
      .then(() => {
        console.log("Permission granted")
        return this.messaging.getToken();
      })
      .then((token) => {
        console.log(token);
        this.saveToken(token, uid);
      })
      .catch(() => {
        console.log("Permissio not granted");
      });
  }

  saveToken(token, uid) {
    //this.database.list('/tokens').push(token);
    const data = { [uid]: token }
    this.database.object('tokens/').update(data)
  }

  receiveMessage() {
    this.messaging.onMessage((payload : any) => {
      console.log("Message received. ", payload);
      this.snackbar.open(payload.notification.title, payload.notification.body )
      this.currentMessage.next(payload)
    });

  }
}
