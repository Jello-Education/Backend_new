import { getRepository, Repository } from "typeorm";

import { Course } from "../../entities/Course";
import { ICoursesRepository, ICreateCoursesDTO } from "../ICoursesRepository";

class CoursesRepository implements ICoursesRepository {
  private repository: Repository<Course>;

  private static INSTANCE: CoursesRepository;

  constructor() {
    this.repository = getRepository(Course);
  }

  async create({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  }: ICreateCoursesDTO): Promise<void> {
    const course = this.repository.create({
      name,
      description,
      author,
      url,
      isPremium,
      classification,
    });

    await this.repository.save(course);
  }

  async list(): Promise<Course[]> {
    const courses = await this.repository.find();
    return courses;
  }
}

export { CoursesRepository };
