'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Employees', [{
    name: 'Judit',
    surname_1: "Calero",
    surname_2: "Timoneda",
    national_id: "46772100J",
    type: "OTHER",
    start_date: "2015-09-01",
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
