const { Model, DataTypes } = require("sequelize")

class Supermercado extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            id_master_fk: DataTypes.INTEGER

        }, { sequelize })
    }
}

module.exports = Supermercado