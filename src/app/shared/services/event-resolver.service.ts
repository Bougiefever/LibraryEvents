import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LibraryEvent } from "../models";
import { Observable } from "rxjs/Rx";
import { EventsService } from "./events.service";

@Injectable()
export class EventResolverService implements Resolve<LibraryEvent> {
  constructor(private eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LibraryEvent>  {
    const url = route.params['url'];
    console.log('resolving url ' + url);
    const event = new LibraryEvent();
    event.$key = '12345';
    event.name = 'fake name';
    event.url = url;
    event.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/browncountylibraryevents.appspot.com/o/mensknitting.gif?alt=media&token=1363dbf3-090d-407d-b52c-68bbb6471ea5';
    event.description = 'this fake description';
    return Observable.of<LibraryEvent>(event);
    // return this.eventsService.getEventByUrl(url)
    //   .first();
  }
}
