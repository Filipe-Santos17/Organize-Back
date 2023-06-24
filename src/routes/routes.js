const routes = require("express").Router();
const columnControllers = require("../controllers/columnControllers");
const userController = require("../controllers/userControllers");
const taskController = require("../controllers/taskController");
const subTaskController = require("../controllers/subTaskController");

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


/* SubTask Routes */
routes.post("/api/subtasks/:user_id/:column_id/:task_id/create", subTaskController.createSubTask);

module.exports = routes;


/**
 * (x) criar usuario
 * (x) logar usuario
 * (x) validar token do usuário
 * () alterar senha
 * () enviar email de nova senha
 * 
 * (x) coletar todos os dados
 * (x) criar board
 * (x) alterar nome
 * (x) deletar board
 * 
 * () criar task
 * () alterar valores da task
 * () deletar task
 * 
 * () criar subtask
 * () alterar valores da subtask
 * () deletar subtask
 */