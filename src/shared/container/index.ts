import { container } from "tsyringe";

import { ICoursesRepository } from "../../modules/courses/repositories/ICoursesRepository";
import { CoursesRepository } from "../../modules/courses/repositories/implementations/CoursesRepository";

container.registerSingleton<ICoursesRepository>(
  "CoursesRepository",
  CoursesRepository
);
