import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

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
import { EventResolver } from "./shared/services/event-resolver";
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { routes } from './app-routing';
import { InstructorDetailComponent } from './instructor/instructor-detail/instructor-detail.component';
import { InstructorResolver } from './shared/services/instructor-resolver';
import { NewEventComponent } from './event/new-event/new-event.component';
import { InstructorEditComponent } from './instructor/instructor-edit/instructor-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorNewComponent } from './instructor/instructor-new/instructor-new.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    InstructorListComponent,
    ScheduledEventListComponent,
    EventDetailComponent,
    HomeComponent,
    EventEditComponent,
    InstructorDetailComponent,
    NewEventComponent,
    InstructorEditComponent,
    InstructorNewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialDesignModule
  ],
  providers: [
    EventsService,
    InstructorsService,
    EventResolver,
    InstructorResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
