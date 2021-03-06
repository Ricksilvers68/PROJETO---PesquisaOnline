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
            preco: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },
            categoriaId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categorias',
                    key: 'id'
                }
            },
            id_sm_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'supermercados',
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
        return queryInterface.dropTable('produtos')
    }
};