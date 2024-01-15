'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('MonthlyIncomes', [{
    year: 2020,
    month: "January",
    income: 1500,
    social_security: 500,
    EmployeeId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      year: 2020,
      month: "February",
      income: 1500,
      social_security: 500,
      EmployeeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      year: 2020,
      month: "March",
      income: 1500,
      social_security: 500,
      EmployeeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      year: 2020,
      month: "April",
      income: 1500,
      social_security: 500,
      EmployeeId: 1,
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
