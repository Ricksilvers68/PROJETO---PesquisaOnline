const { Model, DataTypes } = require("sequelize")

class categorias extends Model {
    static init(sequelize) {
      super.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
      }, {
        sequelize,
        modelName: 'categorias',
      });
      return categorias;
    }
    static associate(models) {
        categorias.hasMany(models.Produtos, {
          as: 'produtos'
        })
      }
  }

  module.exports = categorias