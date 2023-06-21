const routes = require("express").Router();
const userController = require("../controllers/userControllers");

//User Routes
routes.post("/api/create", userController.createUser);
routes.post("/api/login", userController.LoginUser);
routes.get("/api/valid-token", userController.ValidateToken);
routes.post("/api/forget-password", userController.ForgetPassword); //Enviar email com link
//Editar Senha

module.exports = routes;
