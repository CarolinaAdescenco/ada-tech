import { Router } from "express";

import TaskController from "../controller/taskController";
import UserController from "../controller/userController";

const routes = Router();
const taskController = new TaskController();
const userController = new UserController();

routes.post("/login", userController.login);

routes.post("/cards/", taskController.create);
routes.get("/cards/", taskController.findAllTasks);
routes.put("/cards/:id", taskController.update);
routes.delete("/cards/:id", taskController.delete);

export default routes;
