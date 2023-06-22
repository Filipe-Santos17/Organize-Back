const sequelize = require("sequelize");
const dbConfig = require("./config/database");

const User = require("./models/user");
const Column = require("./models/column");
//const User = require("./models/user"); - Tasks
//const User = require("./models/user"); - Tabelas / boards

const connection = new sequelize(dbConfig);

User.init(connection);
Column.init(connection);

Column.associate(connection.models);

connection
  .authenticate()
  .then(console.log("Conectado com sucesso ao banco de Dados"))
  .catch((e) => console.log(`Erro: ${e}`));

module.exports = connection;
