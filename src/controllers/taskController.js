const DataColumn = require("../database/models/column");
const DataUser = require("../database/models/user");
const DataTask = require("../database/models/task");

module.exports = {
  async createTasks(req,res){
    const { title, description } = req.body;
    const { user_id, column_id } = req.params;

    if (!user_id || !column_id) {
      return res.status(403).json({ ErroMsg: "Dados Incompletos" });
    }

    const isValidUser = await DataUser.findByPk(user_id)

    if(!isValidUser){
      return res.status(400).json({ ErroMsg: "Usuário não existe" });
    }

    const isValidTable = await DataColumn.findByPk(column_id);

    if(!isValidTable){
      return res.status(400).json({ ErroMsg: "Board inexistente" });
    }

    const task = await DataTask.create({ title, description, column_id}); //task

    return res.status(201).json({status: "ok", task});
  }
}