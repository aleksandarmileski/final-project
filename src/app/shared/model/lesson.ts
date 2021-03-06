export class Lesson {

  constructor(public $key: string,
              public description: string,
              public duration: string,
              public url: string,
              public tags: string,
              public pro: boolean,
              public longDescription: string,
              public courseId: string) {
  }

  get isBeginner() {
    return this.tags && this.tags.includes('BEGINNER');
  }

  static fromJsonList(array): Lesson[] {
    // return array.map(json => Lesson.fromJson(json));
    return array.map(Lesson.fromJson)
  }

  static fromJson({$key, description, duration, url, tags, pro, longDescription, courseId}): Lesson {
    return new Lesson(
      $key,
      description,
      duration,
      url,
      tags,
      pro,
      longDescription, courseId
    )
  }

}
