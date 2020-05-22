import { Router } from "https://deno.land/x/oak/mod.ts";

import TodoController from "../controllers/todo.controller.ts";

const router = new Router();

router
    .get("/todo", TodoController.index)
    .get("/todo/:id", TodoController.show)
    .delete("/todo/:id", TodoController.destroy)
    .put("/todo/:id", TodoController.update)

export default router;