import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LibraryEvent, Instructor } from '../../shared/models';
import { EventsService, InstructorsService } from '../../shared/services';
import { ScheduleService } from '../../shared/services/schedule.service';
import { MessagingService } from '../../shared/services/messaging.service';
import { AuthService } from '../../shared/services/auth.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'schedule-new',
  templateUrl: './schedule-new.component.html',
  styleUrls: ['./schedule-new.component.scss']
})
export class ScheduleNewComponent implements OnInit {

  eventUrl: string;
  instructorUsername: string;

  events$: Observable<LibraryEvent[]>;
  instructors$: Observable<Instructor[]>

  constructor(
      private route: ActivatedRoute,
      private eventsService: EventsService,
      private instructorsService: InstructorsService,
      private scheduleService: ScheduleService,
      private messagingService: MessagingService,
      private authService: AuthService,
      private snackbar: MdSnackBar
    ) { 
      console.log('new scheduled event');
    route.queryParamMap.do(console.log).subscribe(x => {
      this.eventUrl = x.get('eventUrl');
      this.instructorUsername = x.get('username');
    });
  }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
    this.instructors$ = this.instructorsService.getAllInstructors();
  }

  save(form) {
    console.log(form.value);
    this.scheduleService.save(
      form.value.event.$key,
      form.value.instructor.$key,
      form.value.branch,
      form.value.eventDate,
      form.value.eventTime
    );
  }

  signUpForNotifications() {
    if (!this.authService.authenticated) {
      this.snackbar.open("You must be logged in to receive notifications", " ", {
        duration:3000
      });
    } else {
      this.messagingService.getPermission(this.authService.currentUser.uid);
    }
  }
}
