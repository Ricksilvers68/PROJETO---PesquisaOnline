'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('usuarios_sup', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
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
        return queryInterface.dropTable('usuarios_sup')
    }
};