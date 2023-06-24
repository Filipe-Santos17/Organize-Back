const { Model, DataTypes } = require("sequelize");

class DataSubTask extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          autoIncrement: false,
        },
        is_completed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          autoIncrement: false,
        },
      },
      {
        sequelize: connection, //conexão com banco de dados
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.DataTask, {//Many da erro
      foreignKey: "task_id",
      as: "owner",
    });
  }
}

module.exports = DataSubTask;