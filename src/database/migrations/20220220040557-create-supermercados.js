'use strict';

const { query } = require("express");

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.createTable('supermercados', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            endereco: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cnpj: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            id_master_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user_master_sup',
                    key: 'id'
                }
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
        return queryInterface.dropTable('supermercados');
    }
};