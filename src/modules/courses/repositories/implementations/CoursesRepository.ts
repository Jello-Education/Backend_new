import { Course } from "../../model/Course";
import { ICoursesRepository, ICreateCoursesDTO } from "../ICoursesRepository";

class CoursesRepository implements ICoursesRepository {
  private courses: Course[];

  private static INSTANCE: CoursesRepository;

  private constructor() {
    this.courses = [];
  }

  public static getInstance(): CoursesRepository {
    if (!CoursesRepository.INSTANCE) {
      CoursesRepository.INSTANCE = new CoursesRepository();
    }
    return CoursesRepository.INSTANCE;
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
