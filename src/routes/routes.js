const routes = require("express").Router();
const columnControllers = require("../controllers/columnControllers");
const userController = require("../controllers/userControllers");
const taskController = require("../controllers/taskController");

/* User Routes */
routes.post("/api/user/create", userController.createUser);
routes.post("/api/user/login", userController.LoginUser);
routes.get("/api/user/valid-token", userController.ValidateToken);
routes.post("/api/user/forget-password", userController.ForgetPassword); //Enviar email com link
//Editar Senha

/* Column Routes */
routes.get("/api/column/:user_id", columnControllers.getAllColumns);
routes.post("/api/column/:user_id/create", columnControllers.createColumn);
routes.put("/api/column/:user_id/set-name", columnControllers.renameColumn);
routes.delete("/api/column/:user_id/del-name", columnControllers.deleteColumn);

/* Task Routes */
routes.post("/api/tasks/:user_id/:column_id/create", taskController.createTasks);

module.exports = routes;
