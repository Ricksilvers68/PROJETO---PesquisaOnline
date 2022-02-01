'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.createTable('produtos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            categoria: {
                type: Sequelize.STRING,
                allowNull: false
            },
            preco: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            id_sm_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'supermercado',
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
        })
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('produtos')
    }
};