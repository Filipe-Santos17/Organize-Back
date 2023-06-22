const { Model, DataTypes } = require("sequelize");

class DataColumn extends Model {
  static init(connection) {
    super.init(
      {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: connection, //conexão com banco de dados
      }
    );
  }

  static associate(models){
    this.belongsTo(models.DataUser, {
      foreignKey: 'user_id',
      as: 'owner'
    })
  }
}

module.exports = DataColumn;