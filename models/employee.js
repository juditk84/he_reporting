'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.MonthlyIncome, { foreignKey: "EmployeeId" });
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    surname_1: DataTypes.STRING,
    surname_2: DataTypes.STRING,
    national_id: DataTypes.STRING,
    type: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};