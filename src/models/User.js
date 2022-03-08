'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User.hasOne (models.InfoAdc,{
            as: 'InformacaoAdicional'
          }),
        User.hasMany (models.Lista,{
            as: 'Listas'
        })
      }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_c: DataTypes.STRING,
    flag_usuario: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User',
  });
  return User;
};