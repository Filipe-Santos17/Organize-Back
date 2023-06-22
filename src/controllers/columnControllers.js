const DataColumn = require("../database/models/column");
const DataUser = require("../database/models/user");

module.exports = {
  async getAllColumns(req,res){
    const { user_id } = req.params;

    if (!user_id) {
      return res.status(403).json({ ErroMsg: "Dados Incompletos" });
    }

    const isValidUser = await DataUser.findByPk(user_id)

    if(!isValidUser){
      return res.status(400).json({ ErroMsg: "Usuário não existe" });
    }

    const allBoards = await DataColumn.findAll({ 
      where: { user_id: user_id },
      include: { association: 'tasks' } 
    });

    return res.status(201).json({status: "ok", allBoards});
  },
  
  async createColumn(req, res) {
    const { name } = req.body;
    const { user_id } = req.params;

    if (!name || !user_id) {
      return res.status(403).json({ ErroMsg: "Dados Incompletos" });
    }

    const isValidUser = await DataUser.findByPk(user_id)

    if(!isValidUser){
      return res.status(400).json({ ErroMsg: "Usuário não existe" });
    }

    await DataColumn.create({ name, user_id }); //columnName

    return res.status(201).json({status: "ok"});
  },

  async renameColumn(req,res){
    const { user_id } = req.params;
    const { new_name, id } = req.body;

    if (!user_id) {
      return res.status(403).json({ ErroMsg: "Dados Incompletos" });
    }

    const isValidUser = await DataUser.findByPk(user_id)

    if(!isValidUser){
      return res.status(400).json({ ErroMsg: "Usuário não existe" });
    }

    await DataColumn.update(
      { name : new_name},
      { where: { user_id: user_id, id: id}},
    );// newBoardName

    return res.status(201).json({status: "ok"});
  },

  async deleteColumn(req,res){
    const { user_id } = req.params;
    const { id } = req.body;

    if (!user_id) {
      return res.status(403).json({ ErroMsg: "Dados Incompletos" });
    }

    const isValidUser = await DataUser.findByPk(user_id)

    if(!isValidUser){
      return res.status(400).json({ ErroMsg: "Usuário não existe" });
    }

    await DataColumn.destroy(
      { where: { user_id: user_id, id: id}},
    );// delete

    return res.status(201).json({status: "ok"});
  },
};
