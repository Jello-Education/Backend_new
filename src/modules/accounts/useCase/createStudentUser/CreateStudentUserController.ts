import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStudentUserUseCase } from "./CreateStudentUserUseCase";

class CreateStudentUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, socialName, email, telephone, password } = request.body;

    const createStudentUserUseCase = container.resolve(
      CreateStudentUserUseCase
    );

    await createStudentUserUseCase.execute({
      name,
      socialName,
      email,
      telephone,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateStudentUserController };
