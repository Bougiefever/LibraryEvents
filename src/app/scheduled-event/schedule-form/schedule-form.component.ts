import { Component, OnInit } from '@angular/core';
import { EventsService, InstructorsService } from '../../shared/services';
import { Observable } from 'rxjs/Observable';
import { LibraryEvent, Instructor } from '../../shared/models';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MdDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {

  form: FormGroup;
  events$: Observable<LibraryEvent[]>;
  instructors$: Observable<Instructor[]>
  branches: string[] = ["Ashwaubenon", "Central", "De Pere", "East"];
  eventDate: Date;

  constructor(
    private eventsService: EventsService,
    private instructorsService: InstructorsService,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      event: ['', Validators.required],
      instructor: ['', Validators.required],
      branch: ['', Validators.required],
      eventDate: new FormControl(this.eventDate, Validators.compose([])),
      eventTime: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
    this.instructors$ = this.instructorsService.getAllInstructors();
  }

  onEventDateChange = (e: MdDatepickerInputEvent<Date>) => this.eventDate = e.value;

  get value() {
    return this.form.value;
  }

}
