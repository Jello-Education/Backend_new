import { Course } from "../../model/Course";
import { ICoursesRepository } from "../../repositories/ICoursesRepository";

class ListCoursesUseCase {
  constructor(private coursesRepository: ICoursesRepository) {}

  execute(): Course[] {
    const courses = this.coursesRepository.list();

    return courses;
  }
}

export { ListCoursesUseCase };
