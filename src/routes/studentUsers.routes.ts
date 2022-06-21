import { Router } from "express";

import { CreateStudentUserController } from "../modules/accounts/useCase/createStudentUser/CreateStudentUserController";

const studentUserRoutes = Router();

const createStudentUserController = new CreateStudentUserController();

studentUserRoutes.post("/", createStudentUserController.handle);

export { studentUserRoutes };
