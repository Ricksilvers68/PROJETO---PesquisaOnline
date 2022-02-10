'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'password_c',
      {
        type: Sequelize.STRING,
        allowNull: false
      });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'password_c'
    );

  }
};
