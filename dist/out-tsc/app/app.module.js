var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";
import { HomeComponent } from './home/home.component';
import { LessonsService } from "./shared/model/lessons.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { RouterModule } from "@angular/router";
import { routerConfig } from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from "./shared/model/courses.service";
import { CourseDetailComponent } from './course-detail/course-detail.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                LessonsListComponent,
                TopMenuComponent,
                CoursesComponent,
                CourseDetailComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AngularFireModule.initializeApp(firebaseConfig),
                RouterModule.forRoot(routerConfig)
            ],
            providers: [
                LessonsService,
                CoursesService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/app.module.js.map