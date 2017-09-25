import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class ScheduleService {

  firebaseApp: FirebaseApp;

  constructor(private db: AngularFireDatabase, 
    @Inject(FirebaseApp) firebaseApp: FirebaseApp) {
      this.firebaseApp = firebaseApp;
  }

  save(eventKey, instructorKey, branch, eventDate : Date, eventTime) {
    console.log(eventKey, instructorKey, branch, eventDate, eventTime);
    
  }

}
