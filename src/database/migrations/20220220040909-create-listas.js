'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('listas', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            id_user_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            id_prod_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'produtos',
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
        })
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('listas')
    }
};