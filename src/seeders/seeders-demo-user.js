'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@email.com',
      password: '123456',
      firstName: 'firstName',
      lastName: 'lastName',
      address: 'Viet Nam',
      gender: 1,
      roleId: '',
      phonenumber: '0123456789',
      positionId: '',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
