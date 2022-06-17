import { Router } from "express";

import { CoursesRepository } from "../repositories/CoursesRepository";

const coursesRoutes = Router();

const coursesRepository = new CoursesRepository();

coursesRoutes.post("/", (request, response) => {
  const { name, description, author, url, isPremium, classification } =
    request.body;

  coursesRepository.create({
    name,
    description,
    author,
    url,
    isPremium,
    classification,
  });

  return response.status(201).send();
});

coursesRoutes.get("/", (request, response) => {
  const all = coursesRepository.list();

  return response.json(all);
});

export { coursesRoutes };
