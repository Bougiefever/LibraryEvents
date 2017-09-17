import { Component, OnInit } from '@angular/core';
import { InstructorsService } from '../../shared/services/instructors.service';
import { MdSnackBar } from '@angular/material';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'instructor-new',
  templateUrl: './instructor-new.component.html',
  styleUrls: ['./instructor-new.component.scss']
})
export class InstructorNewComponent implements OnInit {

  constructor(private instructorsService: InstructorsService,
    private snackbar: MdSnackBar) { }

  ngOnInit() {
  }

  save(form) {
    console.log(form.form.value);
     this.instructorsService.addNewInstructor(form.form.value);
      // .subscribe(() => 
      // {
      //   form.reset();
      //   this.snackbar.open('New instructor saved', 'Ok', {
      //     duration: 2000
      //   });
      // })
  }

}
