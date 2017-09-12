import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from "angularfire2/database";
import { LibraryEvent } from "../models/event.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class EventsService {

  constructor(private db:AngularFireDatabase) { }

  getAllEvents() : Observable<LibraryEvent[]> {
    return this.db.list('events')
      .do(console.log)
      .map(LibraryEvent.jsonArrayToObjects);
  }
}
