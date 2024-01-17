'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Periods', [
      {
        ProjectId: 1,
        number: 1,
        start_date: "2020-01-01",
        end_date: "2020-06-30",
        is_final: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 1,
        number: 2,
        start_date: "2020-07-01",
        end_date: "2020-12-31",
        is_final: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 2,
        number: 1,
        start_date: "2020-01-01",
        end_date: "2020-06-30",
        is_final: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 2,
        number: 1,
        start_date: "2020-07-01",
        end_date: "2020-12-31",
        is_final: true,
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
