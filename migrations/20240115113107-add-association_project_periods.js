'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Periods", // name of Source model
      "ProjectId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.removeColumn(
      "Periods", // name of Source model
      "ProjectId" // key we want to remove
    );

  }
};
