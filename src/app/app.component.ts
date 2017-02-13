import {Component} from '@angular/core';
import {initializeApp, database} from 'firebase';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fp works!';

  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  lastCourse: any;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list('courses');

    // courses$.subscribe(
    //   courses => console.log(courses)
    // )
    // aeeeee mokra skratejnca
    // this.courses$.subscribe(console.log);
    // query course
    // const course$ = af.database.object('courses/-Kcqjrc1NaUSZeEd5q1A');
    // course$.subscribe(console.log)

    // this.courses$.subscribe(console.log);

    // set last course
    this.courses$.map(courses => courses[courses.length - 1])
      .subscribe(
        course => {
          // console.log(course);
          this.lastCourse = course
        }
      );

    this.lesson$ = af.database.object('lessons/-KcrHSV6bUwquzxviXy8');

  }

  listPush() {
    this.courses$.push({description: "TEST NEW COURSE"})
      .then(
        (course) => console.log('List Push Done. List added: ', course.path.o[1]),
        console.error
      )
  }

  listRemove() {

    this.courses$.remove(this.lastCourse);

  }

  listUpdate() {

    this.courses$.update(this.lastCourse,
      {description: "Updated course title"})

  }

  objectUpdate() {
    this.lesson$.update({description: "NEW DESCRIPTION"})
  }

  objectSet() {
    this.lesson$.set({description: "NEW DESCRIPTION"})
  }

  objectRemove() {
    this.lesson$.remove()
  }

}
