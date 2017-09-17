import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/observable/fromPromise';
import { Instructor } from "../models";
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class InstructorsService {

  firebaseApp: FirebaseApp;

  constructor(private db: AngularFireDatabase, 
    @Inject(FirebaseApp) fb: FirebaseApp) {
      this.firebaseApp = fb;
  }

  getAllEvents() : Observable<Instructor[]> {
    return this.db.list('instructors')
      .do(console.log)
      .map(Instructor.jsonArrayToObjectArray);
  }

  getInstructorByUsername(username: string) : Observable<Instructor> {
    return this.db.list('instructors', {
      query: {
          orderByChild: 'username',
          equalTo: username
      }
    })
    .map(results => results[0]);
  }

  addNewInstructor(instructor: any) { 
    const key = this.firebaseApp.database().ref().child('/instructors').push(instructor).key;
    //const k = this.fb.database().ref().child('/items'/').push().key;

    //return Observable.fromPromise(this.db.list('instructors').push(instructor))
  }
}
