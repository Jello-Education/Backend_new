import { Course } from "../model/Course";

interface ICreateCoursesDTO {
  name: string;
  description: string;
  author: string;
  url: string;
  isPremium: boolean;
  classification: string;
}

interface ICoursesRepository {
  list(): Course[];
  create({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  }: ICreateCoursesDTO): void;
}

export { ICoursesRepository, ICreateCoursesDTO };
