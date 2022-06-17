import express from "express";

import { coursesRoutes } from "./routes/courses.routes";

const app = express();

app.use(express.json());

app.use("/courses", coursesRoutes);

app.listen(3333, () => console.log("Server is running!"));
