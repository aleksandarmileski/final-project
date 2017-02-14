var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { CoursesService } from "../shared/model/courses.service";
import { ActivatedRoute } from "@angular/router";
export var CourseDetailComponent = (function () {
    function CourseDetailComponent(route, coursesService) {
        this.route = route;
        this.coursesService = coursesService;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var courseUrl = this.route.snapshot.params['id'];
        this.course$ = this.coursesService.findCourseByUrl(courseUrl);
        this.lessons$ = this.coursesService.findAllLessonsForCourse(courseUrl);
    };
    CourseDetailComponent = __decorate([
        Component({
            selector: 'fp-course-detail',
            templateUrl: './course-detail.component.html',
            styleUrls: ['./course-detail.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, CoursesService])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/course-detail/course-detail.component.js.map