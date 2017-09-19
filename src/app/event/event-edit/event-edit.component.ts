import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryEvent } from '../../shared/models';
import { EventsService } from '../../shared/services';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  event: LibraryEvent

  constructor(
      private route: ActivatedRoute,
      private eventsService: EventsService,
      private snackbar: MdSnackBar) {
    route.data
          .subscribe(
          data => this.event = data['event']
      );
   }

  ngOnInit() {
  }

  save(instructor) {
    this.eventsService.updateEvent(this.event.$key, instructor)
      .subscribe(() => {
        this.snackbar.open('Instructor saved', 'Ok', {
          duration: 3000
         });
      });
  }

}
