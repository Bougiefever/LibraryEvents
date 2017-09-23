import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LibraryEvent, Instructor } from '../../shared/models';
import { EventsService, InstructorsService } from '../../shared/services';
import { ScheduleService } from '../../shared/services/schedule.service';

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
      private scheduleService: ScheduleService
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
  }
}
