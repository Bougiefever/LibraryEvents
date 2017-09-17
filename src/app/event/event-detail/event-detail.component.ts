import { Component, OnInit } from '@angular/core';
import { LibraryEvent } from "../../shared/models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event: LibraryEvent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.event = this.route.snapshot.data['event'];
  }

}
