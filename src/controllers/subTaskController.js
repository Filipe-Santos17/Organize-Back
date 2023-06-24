const DataColumn = require("../database/models/column");
const DataUser = require("../database/models/user");
const DataTask = require("../database/models/task");
const DataSubTask = require("../database/models/subTasks");

module.exports = {
  async createSubTask(req, res) {
    const { title, is_completed } = req.body;
    const { user_id, column_id, task_id } = req.params;

    if (!user_id || !column_id || !title || is_completed === null) {
      return res.status(403).json({ ErroMsg: "Dados Incompletos" });
    }

    const isValidUser = await DataUser.findByPk(user_id);

    if (!isValidUser) {
      return res.status(400).json({ ErroMsg: "Usuário não existe" });
    }

    const isValidTable = await DataColumn.findByPk(column_id);

    if (!isValidTable) {
      return res.status(400).json({ ErroMsg: "Board Inexistente" });
    }

    const isValidTask = await DataTask.findByPk(task_id);

    if (!isValidTask) {
      return res.status(400).json({ ErroMsg: "Task Inexistente" });
    }

    await DataSubTask.create({ title, is_completed, task_id });

    return res.status(201).json({ status: "ok"});
  },
};
