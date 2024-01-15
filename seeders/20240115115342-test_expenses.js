'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Expenses', [{
    type: 'TRAVEL',
    inv_reference: "AAA01234",
    internal_reference: "INTERNAL_001",
    inv_date: "2023-01-01T12:00:00",
    payment_date: "2024-02-01T12:00:00",
    amount: 2000,
    SupplierId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),

}], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Expenses', null, {});

  }
};
