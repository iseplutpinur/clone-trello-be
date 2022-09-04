'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [{
      name: 'New Website Profile',
      TodoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Learn React',
      TodoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Learn Express',
      TodoId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Learn Laravel',
      TodoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
