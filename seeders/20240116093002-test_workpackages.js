'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Workpackages', [
      {
        ProjectId: 1,
        number: 1,
        name: "Management",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 1,
        number: 2,
        name: "Investigative investigation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 1,
        number: 3,
        name: "Researchy research",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 2,
        number: 4,
        name: "Management",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 2,
        number: 5,
        name: "Investigative investigation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 2,
        number: 6,
        name: "Researchy research",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 3,
        number: 7,
        name: "Management",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 3,
        number: 8,
        name: "Investigative investigation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 3,
        number: 9,
        name: "Researchy research",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 4,
        number: 10,
        name: "Management",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 4,
        number: 11,
        name: "Investigative investigation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 4,
        number: 12,
        name: "Researchy research",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 5,
        number: 1,
        name: "Management",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 5,
        number: 2,
        name: "Investigative investigation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProjectId: 5,
        number: 15,
        name: "Researchy research",
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
