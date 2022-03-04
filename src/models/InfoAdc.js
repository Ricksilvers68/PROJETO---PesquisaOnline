'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InfoAdc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InfoAdc.init({
    sexo: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    password: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf_cnpj: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    id_user_fk: DataTypes.INTEGER,
    id_user_sm_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InfoAdc',
  });
  return InfoAdc;
};