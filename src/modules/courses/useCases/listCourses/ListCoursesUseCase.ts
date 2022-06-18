import { inject, injectable } from "tsyringe";

import { Course } from "../../entities/Course";
import { ICoursesRepository } from "../../repositories/ICoursesRepository";

@injectable()
class ListCoursesUseCase {
  constructor(
    @inject("CoursesRepository")
    private coursesRepository: ICoursesRepository
  ) {}

  async execute(): Promise<Course[]> {
    const courses = await this.coursesRepository.list();

    return courses;
  }
}

export { ListCoursesUseCase };
