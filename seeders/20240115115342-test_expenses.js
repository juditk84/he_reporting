'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Expenses', 

    [{
      type: 'TRAVEL',
      inv_reference: "AAA01234",
      internal_reference: "INTERNAL_001",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 1000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'TRAVEL',
      inv_reference: "AAA01235",
      internal_reference: "INTERNAL_002",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 2000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'OTHER',
      inv_reference: "AAA01236",
      internal_reference: "INTERNAL_003",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 3000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'OTHER',
      inv_reference: "AAA01237",
      internal_reference: "INTERNAL_004",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 4000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'TRAVEL',
      inv_reference: "AAA01238",
      internal_reference: "INTERNAL_005",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 5000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'TRAVEL',
      inv_reference: "AAA01239",
      internal_reference: "INTERNAL_006",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 6000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'OTHER',
      inv_reference: "AAA01210",
      internal_reference: "INTERNAL_007",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 7000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'OTHER',
      inv_reference: "AAA01211",
      internal_reference: "INTERNAL_008",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 8000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'TRAVEL',
      inv_reference: "AAA01212",
      internal_reference: "INTERNAL_009",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 9000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'OTHER',
      inv_reference: "AAA01213",
      internal_reference: "INTERNAL_010",
      inv_date: "2023-01-01T12:00:00",
      payment_date: "2024-02-01T12:00:00",
      amount: 10000,
      SupplierId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Expenses', null, {});

  }
};
