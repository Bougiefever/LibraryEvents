import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from "angularfire2/database";
import { LibraryEvent } from "../models";
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class EventsService {

  constructor(
    private db:AngularFireDatabase,
    private http: Http
  ) { }

  getAllEvents() : Observable<LibraryEvent[]> {
    return this.db.list('events')
      .map(LibraryEvent.jsonArrayToObjects);
  }

  delete(eventId:string): Observable<any> {
    const url = environment.firebaseConfig.databaseURL + '/events/' + eventId + '.json';
    return this.http.delete(url);
  }

  getEventByUrl(url: string) : Observable<LibraryEvent> {
    return this.db.list('events', {
      query: {
          orderByChild: 'url',
          equalTo: url
      }
    })
    .map(results => LibraryEvent.jsonToObject(results[0]));
  }
}
