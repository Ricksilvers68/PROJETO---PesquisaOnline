'use strict';

const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.createTable('user_master_sup', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            user: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            flag_usuario: {
                type: Sequelize.STRING,
                allowNull: false
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {

        return queryInterface.dropTable('user_master_sup')
    }
};