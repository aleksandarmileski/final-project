var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";
import { AngularFireDatabase } from "angularfire2";
export var CoursesService = (function () {
    function CoursesService(db) {
        this.db = db;
    }
    CoursesService.prototype.findAllCourses = function () {
        return this.db.list('courses')
            .map(Course.fromJsonArray);
    };
    CoursesService.prototype.findCourseByUrl = function (courseUrl) {
        return this.db.list('courses', {
            query: {
                orderByChild: 'url',
                equalTo: courseUrl
            }
        }).map(function (results) { return results[0]; });
    };
    CoursesService.prototype.findLessonKeysPerCourseUrl = function (courseUrl) {
        var _this = this;
        return this.findCourseByUrl(courseUrl)
            .switchMap(function (course) { return _this.db.list("lessonsPerCourse/" + course.$key); })
            .map(function (lspc) { return lspc.map(function (lpc) { return lpc.$key; }); });
    };
    CoursesService.prototype.findAllLessonsForCourse = function (courseUrl) {
        var _this = this;
        return this.findLessonKeysPerCourseUrl(courseUrl)
            .map(function (lspc) { return lspc.map(function (lessonKey) { return _this.db.object('lessons/' + lessonKey); }); })
            .flatMap(function (fbojs) { return Observable.combineLatest(fbojs); });
    };
    CoursesService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AngularFireDatabase])
    ], CoursesService);
    return CoursesService;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/shared/model/courses.service.js.map