import { database, initializeApp } from "firebase";
import { dbData } from "./db-data";
import { firebaseConfig } from "../environments/firebase.config";
console.log('Initizalizing Firebase database ... ');
initializeApp(firebaseConfig);
var coursesRef = database().ref('courses');
var lessonsRef = database().ref('lessons');
dbData.courses.forEach(function (course) {
    console.log('adding course', course.url);
    var courseRef = coursesRef.push({
        url: course.url,
        description: course.description,
        iconUrl: course.iconUrl,
        courseListIcon: course.courseListIcon,
        longDescription: course.longDescription
    });
    var lessonKeysPerCourse = [];
    course.lessons.forEach(function (lesson) {
        console.log('adding lesson ', lesson.url);
        lessonKeysPerCourse.push(lessonsRef.push({
            description: lesson.description,
            duration: lesson.duration,
            url: lesson.url,
            tags: lesson.tags,
            videoUrl: lesson.videoUrl || null,
            longDescription: lesson.longDescription,
            courseId: courseRef.key
        }).key);
    });
    var association = database().ref('lessonsPerCourse');
    var lessonsPerCourse = association.child(courseRef.key);
    lessonKeysPerCourse.forEach(function (lessonKey) {
        console.log('adding lesson to course ');
        var lessonCourseAssociation = lessonsPerCourse.child(lessonKey);
        lessonCourseAssociation.set(true);
    });
});
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/populate-db.js.map