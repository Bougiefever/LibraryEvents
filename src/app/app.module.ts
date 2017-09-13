import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { Route, RouterModule } from "@angular/router";
import { InstructorListComponent } from './instructor/instructor-list/instructor-list.component';

import { ScheduledEventListComponent } from "./scheduled-event/scheduled-event-list/scheduled-event-list.component";
import { EventsService, InstructorsService } from "./shared/services";
import { environment } from '../environments/environment';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventResolverService } from "./shared/services/event-resolver.service";

const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/:url',
    component: EventDetailComponent,
    resolve: {
      event: EventResolverService
    }
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
    redirectTo: 'home',
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
    ScheduledEventListComponent,
    EventDetailComponent,
    HomeComponent,
    EventEditComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [
    EventsService,
    InstructorsService,
    EventResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
