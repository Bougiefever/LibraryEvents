import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { Route, RouterModule } from "@angular/router";
import { InstructorListComponent } from './instructor/instructor-list/instructor-list.component';

import { ScheduledEventListComponent } from "./scheduled-event/scheduled-event-list/scheduled-event-list.component";
import { EventsService } from "./shared/services/events.service";
import { environment } from '../environments/environment';


const routes: Route[] = [
  {
      path: 'events',
      component: EventListComponent
  },
  {
    path: 'instructors',
    component: InstructorListComponent
  },
  {
    path: 'scheduled-events',
    component: ScheduledEventListComponent
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'events'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    InstructorListComponent,
    ScheduledEventListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
