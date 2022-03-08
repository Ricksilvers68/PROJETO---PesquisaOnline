const { Model, DataTypes } = require("sequelize")

class Supermercado extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            id_master_fk: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'Supermercado'
        })
        return Supermercado
    }
    static associate(models) {
        Supermercado.hasMany(models.Produtos, {
                as: 'produtos'
            }),
            Supermercado.belongsTo(models.UserMasterSup, {
                foreignKey: 'id_master_fk',
                as: 'UsuariosMasterSuper'
            }),
            Supermercado.hasMany(models.UserSup, {
                as: 'UsuariosSup'
            })
    }
}
module.exports = Supermercado