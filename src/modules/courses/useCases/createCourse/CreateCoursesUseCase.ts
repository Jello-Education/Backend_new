import { inject, injectable } from "tsyringe";

import { ICoursesRepository } from "../../repositories/ICoursesRepository";

interface IRequest {
  name: string;
  description: string;
  author: string;
  url: string;
  isPremium: boolean;
  classification: string;
}

@injectable()
class CreateCoursesUseCase {
  constructor(
    @inject("CoursesRepository")
    private coursesRepository: ICoursesRepository
  ) {}

  execute({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  }: IRequest): void {
    this.coursesRepository.create({
      name,
      description,
      author,
      url,
      isPremium,
      classification,
    });
  }
}

export { CreateCoursesUseCase };
