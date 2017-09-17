import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LibraryEvent } from "../models";
import { Observable } from "rxjs/Rx";
import { EventsService } from "./events.service";


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class EventResolver implements Resolve<FirebaseObjectObservable<any>> {
  constructor(private eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LibraryEvent>  {
    const url = route.params['url'];
    
    return this.eventsService
    .getEventByUrl(route.params['url'])
    .first();
  }
}
