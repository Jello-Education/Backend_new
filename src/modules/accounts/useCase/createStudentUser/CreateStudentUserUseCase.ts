import { inject, injectable } from "tsyringe";

import { ICreateStudentUsersDTO } from "../../dtos/ICreateStudentUserDTO";
import { IStudentUserRepository } from "../../repositories/IStudentUsersRepository";

@injectable()
class CreateStudentUserUseCase {
  constructor(
    @inject("StudentUsersRepository")
    private studentUsersRepository: IStudentUserRepository
  ) {}

  async execute({
    name,
    social_name,
    email,
    password,
    telephone,
  }: ICreateStudentUsersDTO): Promise<void> {
    await this.studentUsersRepository.create({
      name,
      social_name,
      email,
      password,
      telephone,
    });
  }
}

export { CreateStudentUserUseCase };
