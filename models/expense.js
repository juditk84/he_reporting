'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.belongsTo(models.Supplier, { foreignKey: "SupplierId" });
      Expense.belongsTo(models.Period, { foreignKey: "PeriodId" });
      Expense.belongsToMany(models.WorkPackage, { through: "WorkpackageExpenses" });
    }
  }
  Expense.init({
    type: DataTypes.STRING,
    inv_reference: DataTypes.STRING,
    internal_reference: DataTypes.STRING,
    inv_date: DataTypes.DATE,
    payment_date: DataTypes.DATE,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};