const sequelize = require("sequelize");
const dbConfig = require("./config/database");

const User = require("./models/user");
const Column = require("./models/column");
const Tasks = require("./models/task");
const SubTasks = require("./models/subTasks");

const connection = new sequelize(dbConfig);

User.init(connection);
Column.init(connection);
Tasks.init(connection)
SubTasks.init(connection)

Column.associate(connection.models);
Tasks.associate(connection.models);
SubTasks.associate(connection.models);

connection
  .authenticate()
  .then(console.log("Conectado com sucesso ao banco de Dados"))
  .catch((e) => console.log(`Erro: ${e}`));

module.exports = connection;
