import { Router } from "express";

import { coursesRoutes } from "./courses.routes";

const router = Router();

router.use("/courses", coursesRoutes);

export { router };
