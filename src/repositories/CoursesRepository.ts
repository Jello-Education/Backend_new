import { Course } from "../model/Course";

interface ICreateCoursesDTO {
  name: string;
  description: string;
  author: string;
  url: string;
  isPremium: boolean;
  classification: string;
}

class CoursesRepository {
  private courses: Course[];

  constructor() {
    this.courses = [];
  }

  create({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  }: ICreateCoursesDTO): void {
    const course = new Course();

    Object.assign(course, {
      name,
      description,
      author,
      url,
      isPremium,
      classification,
      created_at: new Date(),
    });

    this.courses.push(course);
  }

  list(): Course[] {
    return this.courses;
  }
}

export { CoursesRepository };
