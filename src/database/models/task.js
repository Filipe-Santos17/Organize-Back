const { Model, DataTypes } = require("sequelize");

class DataTask extends Model {
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
        description: {
          type: DataTypes.STRING,
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
    this.belongsTo(models.DataColumn, {//Many da erro
      foreignKey: "column_id",
      as: "owner",
    });
  }
}

module.exports = DataTask;