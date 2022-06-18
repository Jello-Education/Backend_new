import { Router } from "express";

import createCourseController from "../modules/courses/useCases/createCourse";
import { listCourseController } from "../modules/courses/useCases/listCourses";

const coursesRoutes = Router();

coursesRoutes.post("/", (request, response) => {
  return createCourseController().handle(request, response);
});

coursesRoutes.get("/", (request, response) => {
  return listCourseController.handle(request, response);
});

export { coursesRoutes };
