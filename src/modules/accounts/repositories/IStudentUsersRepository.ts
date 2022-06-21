import { ICreateStudentUsersDTO } from "../dtos/ICreateStudentUserDTO";

interface IStudentUserRepository {
  create(data: ICreateStudentUsersDTO): Promise<void>;
}

export { IStudentUserRepository };
