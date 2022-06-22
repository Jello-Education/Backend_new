import { getRepository, Repository } from "typeorm";

import { ICreateStudentUsersDTO } from "../../dtos/ICreateStudentUserDTO";
import { StudentUser } from "../../entities/StudentUser";
import { IStudentUserRepository } from "../IStudentUsersRepository";

class StudentUsersRepository implements IStudentUserRepository {
  private repository: Repository<StudentUser>;

  constructor() {
    this.repository = getRepository(StudentUser);
  }

  async create({
    name,
    socialName,
    telephone,
    password,
    email,
  }: ICreateStudentUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      socialName,
      telephone,
      email,
      password,
    });

    await this.repository.save(user);
  }
}

export { StudentUsersRepository };
