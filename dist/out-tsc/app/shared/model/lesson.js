export var Lesson = (function () {
    function Lesson($key, description, duration, url, tags, pro, longDescription, courseId) {
        this.$key = $key;
        this.description = description;
        this.duration = duration;
        this.url = url;
        this.tags = tags;
        this.pro = pro;
        this.longDescription = longDescription;
        this.courseId = courseId;
    }
    Object.defineProperty(Lesson.prototype, "isBeginner", {
        get: function () {
            return this.tags && this.tags.includes('BEGINNER');
        },
        enumerable: true,
        configurable: true
    });
    Lesson.fromJsonList = function (array) {
        // return array.map(json => Lesson.fromJson(json));
        return array.map(Lesson.fromJson);
    };
    Lesson.fromJson = function (_a) {
        var $key = _a.$key, description = _a.description, duration = _a.duration, url = _a.url, tags = _a.tags, pro = _a.pro, longDescription = _a.longDescription, courseId = _a.courseId;
        return new Lesson($key, description, duration, url, tags, pro, longDescription, courseId);
    };
    return Lesson;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/shared/model/lesson.js.map