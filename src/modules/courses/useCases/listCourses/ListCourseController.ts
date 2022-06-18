import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCoursesUseCase } from "./ListCoursesUseCase";

class ListCourseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCoursesUseCase = container.resolve(ListCoursesUseCase);
    const all = await listCoursesUseCase.execute();

    return response.json(all);
  }
}

export { ListCourseController };
