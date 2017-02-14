import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
export var routerConfig = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses',
        children: [
            {
                path: ':id',
                component: CourseDetailComponent
            },
            {
                path: '',
                component: CoursesComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/router.config.js.map