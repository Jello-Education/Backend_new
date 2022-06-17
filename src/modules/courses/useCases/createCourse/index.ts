import { CoursesRepository } from "../../repositories/implementations/CoursesRepository";
import { CreateCourseController } from "./CreateCourseController";
import { CreateCoursesUseCase } from "./CreateCoursesUseCase";

const coursesRepository = CoursesRepository.getInstance();

const createCoursesUseCase = new CreateCoursesUseCase(coursesRepository);

const createCourseController = new CreateCourseController(createCoursesUseCase);

export { createCourseController };
