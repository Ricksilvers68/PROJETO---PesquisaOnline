'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMasterSup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMasterSup.init({
    nome: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    flag_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserMasterSup',
  });
  return UserMasterSup;
};