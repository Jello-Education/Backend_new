import { Course } from "../entities/Course";

interface ICreateCoursesDTO {
  name: string;
  description: string;
  author: string;
  url: string;
  isPremium: boolean;
  classification: string;
}

interface ICoursesRepository {
  list(): Promise<Course[]>;
  create({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  }: ICreateCoursesDTO): Promise<void>;
}

export { ICoursesRepository, ICreateCoursesDTO };
