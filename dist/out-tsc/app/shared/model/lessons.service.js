var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Lesson } from "./lesson";
import { AngularFire } from "angularfire2";
export var LessonsService = (function () {
    function LessonsService(af) {
        this.af = af;
    }
    LessonsService.prototype.findAllLessons = function () {
        return this.af.database.list('lessons')
            .do(console.log)
            .map(Lesson.fromJsonList);
    };
    LessonsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AngularFire])
    ], LessonsService);
    return LessonsService;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/shared/model/lessons.service.js.map