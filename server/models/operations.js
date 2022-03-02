"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Operations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Operations.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.FLOAT, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: true },
    },
    {
      sequelize,
      tableName: "operations",
      modelName: "Operations",
    }
  );
  return Operations;
};
