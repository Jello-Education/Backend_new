import { CoursesRepository } from "../../repositories/implementations/CoursesRepository";
import { ListCourseController } from "./ListCourseController";
import { ListCoursesUseCase } from "./ListCoursesUseCase";

const coursesRepository = null;

const listCoursesUseCase = new ListCoursesUseCase(coursesRepository);

const listCourseController = new ListCourseController(listCoursesUseCase);

export { listCourseController };
