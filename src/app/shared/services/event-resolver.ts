import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LibraryEvent } from "../models";
import { Observable } from "rxjs/Rx";
import { EventsService } from "./events.service";


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class EventResolver implements Resolve<LibraryEvent> {
  constructor(private eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LibraryEvent>  {
    const url = route.params['url'];
    console.log('resolving url ' + url);
    
    return this.eventsService
    .getEventByUrl(route.params['url'])
    .first();
  }
}
