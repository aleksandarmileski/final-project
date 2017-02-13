import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
export var routerConfig = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
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