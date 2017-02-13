var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AngularFire } from "angularfire2";
export var AppComponent = (function () {
    function AppComponent(af) {
        var _this = this;
        this.af = af;
        this.title = 'fp works!';
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
        this.courses$.map(function (courses) { return courses[courses.length - 1]; })
            .subscribe(function (course) {
            // console.log(course);
            _this.lastCourse = course;
        });
        this.lesson$ = af.database.object('lessons/-KcrHSV6bUwquzxviXy8');
    }
    AppComponent.prototype.listPush = function () {
        this.courses$.push({ description: "TEST NEW COURSE" })
            .then(function (course) { return console.log('List Push Done. List added: ', course.path.o[1]); }, console.error);
    };
    AppComponent.prototype.listRemove = function () {
        this.courses$.remove(this.lastCourse);
    };
    AppComponent.prototype.listUpdate = function () {
        this.courses$.update(this.lastCourse, { description: "Updated course title" });
    };
    AppComponent.prototype.objectUpdate = function () {
        this.lesson$.update({ description: "NEW DESCRIPTION" });
    };
    AppComponent.prototype.objectSet = function () {
        this.lesson$.set({ description: "NEW DESCRIPTION" });
    };
    AppComponent.prototype.objectRemove = function () {
        this.lesson$.remove();
    };
    AppComponent = __decorate([
        Component({
            selector: 'fp-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/app.component.js.map