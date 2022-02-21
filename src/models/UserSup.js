'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSup.init({
    nome: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    flag_usuario: DataTypes.STRING,
    id_sm_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserSup',
  });
  return UserSup;
};