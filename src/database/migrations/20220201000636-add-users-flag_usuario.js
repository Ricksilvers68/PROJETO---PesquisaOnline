'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.addColumn(
            'users',
            'flag_usuario', {
                type: Sequelize.STRING,
                allowNull: false
            });

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.removeColumn(
            'users',
            'flag_usuario'
        );

    }
};