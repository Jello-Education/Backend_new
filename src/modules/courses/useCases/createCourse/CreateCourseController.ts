import { Request, Response } from "express";

import { CreateCoursesUseCase } from "./CreateCoursesUseCase";

class CreateCourseController {
  constructor(private createCoursesUseCase: CreateCoursesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description, author, url, isPremium, classification } =
      request.body;

    this.createCoursesUseCase.execute({
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
