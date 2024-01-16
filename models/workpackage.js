'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkPackage.belongsTo(models.Project, { foreignKey: "ProjectId" });
      WorkPackage.belongsToMany(models.Expense, { through: "WorkpackageExpenses" });
    }
  }
  WorkPackage.init({
    number: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkPackage',
  });
  return WorkPackage;
};