'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Projects', [
      {
        CE_code: 'CE_testcode_0001',
        internal_code: "EA616001",
        start_date: "2020-09-01",
        end_date: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CE_code: 'CE_testcode_0002',
        internal_code: "EA616002",
        start_date: "2020-09-01",
        end_date: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CE_code: 'CE_testcode_0003',
        internal_code: "EA616003",
        start_date: "2020-09-01",
        end_date: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CE_code: 'CE_testcode_0004',
        internal_code: "EA616004",
        start_date: "2020-09-01",
        end_date: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        CE_code: 'CE_testcode_0005',
        internal_code: "EA616005",
        start_date: "2020-09-01",
        end_date: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

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
