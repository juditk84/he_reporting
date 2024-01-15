'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonthlyIncome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MonthlyIncome.belongsTo(models.Employee, { foreignKey: "EmployeeId" });
    }
  }
  MonthlyIncome.init({
    year: DataTypes.INTEGER,
    month: DataTypes.STRING,
    income: DataTypes.INTEGER,
    social_security: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MonthlyIncome',
  });
  return MonthlyIncome;
};