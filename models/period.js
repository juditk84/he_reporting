'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Period extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Period.belongsTo(models.Project)
      Period.hasMany(models.Expense);
    }
  }
  Period.init({
    number: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    is_final: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Period',
  });
  return Period;
};