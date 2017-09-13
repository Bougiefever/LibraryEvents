import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Instructor } from "../../shared/models";
import { InstructorsService } from "../../shared/services/";

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  private instructors$ : Observable<Instructor[]>

  constructor(private instructorService: InstructorsService) { }

  ngOnInit() {
    this.instructors$ = this.instructorService.getAllEvents();
  }

}
