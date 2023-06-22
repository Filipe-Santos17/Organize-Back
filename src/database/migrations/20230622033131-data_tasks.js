"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("data_tasks", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
      },
      column_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "data_columns", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data-tasks');
  },
};
