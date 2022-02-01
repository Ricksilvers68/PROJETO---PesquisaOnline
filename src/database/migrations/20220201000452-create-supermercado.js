'use strict';

const { query } = require("express");

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.createTable('supermercado', {
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('supermercado');
    }
};