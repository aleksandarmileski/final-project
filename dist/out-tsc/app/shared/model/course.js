export var Course = (function () {
    function Course($key, url, description, iconUrl, courseListIcon, longDescription) {
        this.$key = $key;
        this.url = url;
        this.description = description;
        this.iconUrl = iconUrl;
        this.courseListIcon = courseListIcon;
        this.longDescription = longDescription;
    }
    Course.fromJson = function (_a) {
        var $key = _a.$key, url = _a.url, description = _a.description, iconUrl = _a.iconUrl, courseListIcon = _a.courseListIcon, longDescription = _a.longDescription;
        return new Course($key, url, description, iconUrl, courseListIcon, longDescription);
    };
    Course.fromJsonArray = function (json) {
        return json.map(Course.fromJson);
    };
    return Course;
}());
//# sourceMappingURL=C:/Users/Aleksandar/WebStormProjects/AngularUniversity-FinalProject/Final Poject/src/app/shared/model/course.js.map