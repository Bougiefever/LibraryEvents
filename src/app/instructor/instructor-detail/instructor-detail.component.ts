import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.scss']
})
export class InstructorDetailComponent implements OnInit {

  instructor: Instructor;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.instructor = this.route.snapshot.data['instructor'];
  }

  delete() {
    console.log('del');
  }
}
