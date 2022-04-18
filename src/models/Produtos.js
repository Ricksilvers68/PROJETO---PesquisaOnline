const { Model, DataTypes } = require("sequelize")

class produtos extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.FLOAT(10, 2),
            categoriaId: DataTypes.INTEGER,
            id_sm_fk: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'produtos',
            createdAt: false,
            updatedAt: false,
        });
        return produtos;
    }
    static associate(models) {
        produtos.belongsTo(models.categorias, {
                foreignKey: 'categoriaId',
                as: 'categorias'
            }),
            produtos.belongsTo(models.Supermercado, {
                foreignKey: 'id_sm_fk',
                as: 'supermercados'
            }),
            produtos.hasOne(models.Lista), {
                as: 'lista'
            }
    }
}

module.exports = produtos