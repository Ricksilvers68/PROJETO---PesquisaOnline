'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('infoadc', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            sexo: {
                type: Sequelize.STRING
            },
            nascimento: {
                type: Sequelize.STRING
            },
            telefone: {
                type: Sequelize.STRING
            },
            cpf_cnpj: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            cep: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bairro: {
                type: Sequelize.STRING
            },
            cidade: {
                type: Sequelize.STRING
            },
            estado: {
                type: Sequelize.STRING
            },
            numero: {
                type: Sequelize.INTEGER
            },
            complemento: {
                type: Sequelize.STRING
            },
            id_user_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            id_user_sm_fk: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'usuarios_sup',
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
        return queryInterface.dropTable('infoadc')
    }
};