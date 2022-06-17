import { Request, Response } from "express";

import { ListCoursesUseCase } from "./ListCoursesUseCase";

class ListCourseController {
  constructor(private listCoursesUseCase: ListCoursesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCoursesUseCase.execute();

    return response.json(all);
  }
}

export { ListCourseController };
