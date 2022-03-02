'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Operations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date:{
        allowNull: true,
        type: DataTypes.DATE
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Operations');
  }
};