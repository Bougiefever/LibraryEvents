import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Rx";
import { Instructor } from "../models";

@Injectable()
export class InstructorsService {

  constructor(private db: AngularFireDatabase ) { }

  getAllEvents() : Observable<Instructor[]> {
    return this.db.list('instructors')
      .do(console.log)
      .map(Instructor.jsonArrayToObjectArray);
  }
}
