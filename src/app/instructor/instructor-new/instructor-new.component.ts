import { Component, OnInit } from '@angular/core';
import { InstructorsService } from '../../shared/services/instructors.service';
import { MdSnackBar } from '@angular/material';
import {Observable} from "rxjs/Rx";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'instructor-new',
  templateUrl: './instructor-new.component.html',
  styleUrls: ['./instructor-new.component.scss']
})
export class InstructorNewComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private instructorsService: InstructorsService,
    private snackbar: MdSnackBar) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      imageUrl: [''],
      bio: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  save() {
    
     this.instructorsService.addNewInstructor(this.form.value)
       .subscribe(() => 
       {
         this.form.reset();
         this.snackbar.open('New instructor saved', 'Ok', {
           duration: 3000
        });
      });
  }

}
