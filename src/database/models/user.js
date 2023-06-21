const { Model, DataTypes } = require("sequelize");

class DataUser extends Model {
  static init(connection) {
    super.init(
      {
        email: {
          type: DataTypes.STRING,
          primaryKey: true,
          unique: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        sequelize: connection, //conexão com banco de dados
      }
    );
  }
}

module.exports = DataUser;