'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supermercado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Supermercado.hasMany(models.Produtos,{
             as: 'produtos'
        }),
        Supermercado.belongsTo (models.UserMasterSup,{
             foreignKey: 'id_master_fk',
             as: 'UsuariosMasterSuper'
        }),
        Supermercado.hasMany(models.UserSup, {
             as: 'UsuariosSup'
        })
    }
  }
  Supermercado.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    id_master_fk: DataTypes.INTEGER
    }, 
  {
    sequelize,
    modelName: 'Supermercado',
  });
  return Supermercado;
};