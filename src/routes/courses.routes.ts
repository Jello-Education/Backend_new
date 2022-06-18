import { Router } from "express";

import { CreateCourseController } from "../modules/courses/useCases/createCourse/CreateCourseController";
import { ListCourseController } from "../modules/courses/useCases/listCourses/ListCourseController";

const coursesRoutes = Router();

const createCourseController = new CreateCourseController();
const listCourseController = new ListCourseController();

coursesRoutes.post("/", createCourseController.handle);

coursesRoutes.get("/", listCourseController.handle);

export { coursesRoutes };
