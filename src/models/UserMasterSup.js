'use strict';
const  { Model, DataTypes } = require('sequelize');

  class UserMasterSup extends Model {
    static init(sequelize) {
      super.init({
        nome: DataTypes.STRING,
        user: DataTypes.STRING,
        password: DataTypes.STRING,
        flag_usuario: DataTypes.STRING
      }, {
        sequelize,
        modelName: 'UserMasterSup',
      });
      return UserMasterSup;
  }
    static associate(models) {
          UserMasterSup.hasMany(models.Supermercado, {
            as: 'supermercado'
          })
    }
  }
 
  module.exports = UserMasterSup;
