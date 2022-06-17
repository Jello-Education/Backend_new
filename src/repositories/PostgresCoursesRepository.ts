import { Course } from "../model/Course";
import { ICoursesRepository, ICreateCoursesDTO } from "./ICoursesRepository";

class PostgresCoursesRepository implements ICoursesRepository {
  list(): Course[] {
    throw new Error("Method not implemented.");
  }
  create({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  }: ICreateCoursesDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCoursesRepository };
