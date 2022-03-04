'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  produtos.init({
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT(10,2),
    categoriaId: DataTypes.INTEGER,
    id_sm_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};