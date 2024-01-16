'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("WorkpackageExpenses", {
      WorkpackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: "WorkPackages",
          key: "id",
        },
        allowNull: false,
      },
      ExpenseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Expenses",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("WorkpackageExpenses");
  },
};