import { container } from "tsyringe";

import { StudentUsersRepository } from "../../modules/accounts/repositories/implementations/StudentUsersRepository";
import { IStudentUserRepository } from "../../modules/accounts/repositories/IStudentUsersRepository";
import { ICoursesRepository } from "../../modules/courses/repositories/ICoursesRepository";
import { CoursesRepository } from "../../modules/courses/repositories/implementations/CoursesRepository";

container.registerSingleton<ICoursesRepository>(
  "CoursesRepository",
  CoursesRepository
);

container.registerSingleton<IStudentUserRepository>(
  "StudentUsersRepository",
  StudentUsersRepository
);
