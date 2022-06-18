import { CoursesRepository } from "../../repositories/implementations/CoursesRepository";
import { CreateCourseController } from "./CreateCourseController";
import { CreateCoursesUseCase } from "./CreateCoursesUseCase";

export default (): CreateCourseController => {
  const coursesRepository = new CoursesRepository();

  const createCoursesUseCase = new CreateCoursesUseCase(coursesRepository);

  const createCourseController = new CreateCourseController(
    createCoursesUseCase
  );

  return createCourseController;
};
