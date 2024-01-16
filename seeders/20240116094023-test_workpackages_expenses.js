'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('WorkpackageExpenses', [
    {
      ExpenseId: 1,
      WorkpackageId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ExpenseId: 1,
      WorkpackageId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ExpenseId: 1,
      WorkpackageId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ExpenseId: 2,
      WorkpackageId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      ExpenseId: 3,
      WorkpackageId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
