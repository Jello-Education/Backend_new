import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCoursesUseCase } from "./CreateCoursesUseCase";

class CreateCourseController {
  handle(request: Request, response: Response): Response {
    const { name, description, author, url, isPremium, classification } =
      request.body;

    const createCoursesUseCase = container.resolve(CreateCoursesUseCase);

    createCoursesUseCase.execute({
      name,
      description,
      author,
      url,
      isPremium,
      classification,
    });

    return response.status(201).send();
  }
}

export { CreateCourseController };
