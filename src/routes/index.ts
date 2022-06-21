import { Router } from "express";

import { coursesRoutes } from "./courses.routes";
import { studentUserRoutes } from "./studentUsers.routes";

const router = Router();

router.use("/courses", coursesRoutes);
router.use("/studentUser", studentUserRoutes);

export { router };
