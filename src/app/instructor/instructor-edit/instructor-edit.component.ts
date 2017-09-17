import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent implements OnInit {
  instructor: Instructor;
  form: FormGroup;
  constructor(private route: ActivatedRoute,
      private fb: FormBuilder) { 
    route.data
    .do(console.log)
    .subscribe(
    data => this.instructor = data['instructor']);

    // this.form = this.fb.group({
    //   username: ['', Validators.required],
    //   name: ['', Validators.required],
    //   url: ['', Validators.required],
    //   imageUrl: ['', Validators.required],
    //   bio: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   email: ['', Validators.required]
    // })
  }

  ngOnInit() {
    
  }
}
